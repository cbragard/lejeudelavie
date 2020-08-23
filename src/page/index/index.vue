<template>
    <div class="page--index">
        <div class="grid">
            <div class="line" v-for="line in grid">
                <div
                    v-for="row in line.rows"
                    v-on:click="toggle(row.x, row.y)"
                    class="row"
                    :class="{
                        'alive': row.status
                    }">
                </div>
            </div>
        </div>
        <div class="controls">
            <p class="round">
                Round: {{  count }}
            </p>
            <div class="submit">
                <span class="label">
                    Reset
                </span>
                <button v-on:click="empty(false)">
                    empty
                </button>
                <button v-on:click="empty(true)">
                    random
                </button>
            </div>
            <div class="submit">
                <span class="label">
                    Lines / Cols
                </span>
                <input
                    type="number"
                    :disabled="this.running"
                    @change="empty(false)"
                    v-model.lazy="lines" />
                <input
                    type="number"
                    :disabled="this.running"
                    @change="empty(false)"
                    v-model.lazy="cols"  />
            </div>
            <div class="submit">
                <span class="label">
                    Evolution
                </span>
                <button
                    :disabled="this.running"
                    v-on:click="start()">
                    Start
                </button>
                <button
                    :disabled="!this.running"
                    v-on:click="stop()">
                        Stop
                </button>
            </div>
            <button
                :disabled="this.running"
                v-on:click="round()">
                    +1 round
            </button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'Index',
        created() {
            this.empty()
        },
        data() {
            return {
                interval: 50,
                running: false,
                cols: 250,
                lines: 150,
                count: 0,
                grid: []
            }
        },
        methods: {
            checkRow(row) {
                let count = 0
                const items = this.getAround(row.x, row.y)
                items.forEach((item)=> {
                    if (item && item.status === 1) {
                        count++
                    }
                })
                return this.evolve(row, count)
            },
            findRow(x, y) {
                let row
                const line = this.grid[y - 1]
                if (line) {
                    row = line.rows[x - 1]
                }
                return row
            },
            evolve(row, count) {
                let status = row.status
                if (row.status === 1) {
                    if ([2,3].indexOf(count) === -1) {
                        status = 0
                    }
                } else if (count === 3) {
                    status = 1
                }
                return {
                    x: row.x,
                    y: row.y,
                    status
                }
            },
            getAround(x, y) {
                return [
                    this.findRow(x - 1, y - 1),
                    this.findRow(x, y - 1),
                    this.findRow(x + 1, y - 1),
                    this.findRow(x - 1, y),
                    this.findRow(x + 1, y),
                    this.findRow(x - 1, y + 1),
                    this.findRow(x, y + 1),
                    this.findRow(x + 1, y + 1)
                ]
            },
            empty(random=false) {
                const grid = []
                for (let i = 0; i < this.lines; i++) {
                    grid.push({
                        y: i + 1,
                        rows: []
                    })
                    for (let j = 0; j < this.cols; j++) {
                        const status = random
                            ? Math.round(Math.random())
                            : 0
                        grid[i].rows.push({
                            x: j + 1,
                            y: i + 1,
                            status
                        })
                    }
                }
                this.grid = grid
                this.count = 0
            },
            round() {
                const newgrid = []
                this.grid.forEach((line, i) => {
                    newgrid.push({
                        y: i + 1,
                        rows: []
                    })
                    line.rows.forEach((item, j) => {
                        const row = this.checkRow(item)
                        newgrid[i].rows.push(row)
                    })
                })
                this.grid = newgrid
                this.count = this.count + 1
                if (this.running) {
                    setTimeout(() => {
                        this.round()
                    }, this.interval)
                }
            },
            start() {
                this.running = true
                this.round()
            },
            stop() {
                this.running = false
            },
            toggle(x, y) {
                const row = this.findRow(x, y)
                if (row) {
                    if (row.status === 0) {
                        row.status = 1
                    } else if(row.status === 1) {
                        row.status = 0
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
   @import './index.scss';
</style>
