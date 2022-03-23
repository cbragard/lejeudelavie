export default {
    name: 'App',
    mounted () {
        this.empty(true)
    },
    data() {
        return {
            cols: 180,
            count: 0,
            fps: 0,
            grid: [],
            now: null,
            lines: 150,
            running: false
        }
    },
    methods: {
        check (row) {
            const items = this.matrix(row.x, row.y)
            const count = items.reduce((acc, item) => item?.status === 1 ? acc + 1 : acc, 0)
            return this.evolve(row, count)
        },
        evolve (row, count) {
            let { status, x, y } = row
            if (status === 1) {
                if ([2, 3].indexOf(count) === -1) {
                    status = 0
                }
            } else if (count === 3) {
                status = 1
            }
            return {
                x,
                y,
                status
            }
        },
        empty (random = false) {
            this.count = 0
            this.grid = [...Array(this.lines)].map((_, i) => ({
                y: i + 1,
                rows: [...Array(this.cols)].map((_, j) => ({
                    x: j + 1,
                    y: i + 1,
                    status: random
                        ? Math.round(Math.random())
                        : 0
                }))
            }))
        },
        find (x, y) {
            const line = this.grid[y - 1]
            return line ? line.rows[x - 1] : null
        },
        matrix (x, y) {
            return [
                this.find(x - 1, y - 1),
                this.find(x, y - 1),
                this.find(x + 1, y - 1),
                this.find(x - 1, y),
                this.find(x + 1, y),
                this.find(x - 1, y + 1),
                this.find(x, y + 1),
                this.find(x + 1, y + 1)
            ]
        },
        round () {
            const grid = this.grid.map((line, i) => ({
                y: i + 1,
                rows: line.rows.map((row) => this.check(row))
            }))
            this.grid = grid
            this.count = this.count + 1
            if (this.running) {
                const now = Date.now()
                this.fps = this.now
                    ? Math.round((1000 / ( now - this.now )) * 100) / 100
                    : 0
                this.now = now
                setTimeout(this.round)
            }
        },
        start () {
            this.running = true
            this.round()
        },
        stop () {
            this.running = false
        },
        toggle (x, y) {
            const row = this.find(x, y)
            if (row?.status === 0) {
                row.status = 1
            } else if(row?.status === 1) {
                row.status = 0
            }
        }
    }
}
