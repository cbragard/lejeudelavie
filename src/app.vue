<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

onMounted(() => {
  reset()
})

const cols = ref(150)
const lines = ref(150)
const fps = ref(0)
const tick = ref(null)
const count = ref(0)
const grid = ref([])
const running = ref(false)

function check(row) {
    const count = matrix(row.x, row.y).reduce((acc, item) =>
        item?.status === 1
            ? acc + 1
            : acc
    , 0)
    return evolve(row, count)
}
function evolve({ status, x, y }, count) {
    if (status === 1 && [2, 3].indexOf(count) === -1) {
        return { status: 0, x, y }
    } else if (count === 3) {
        return { status: 1, x, y }
    }
    return { status, x, y }
}
function matrix(x, y) {
    return [
        find(x - 1, y - 1),
        find(x, y - 1),
        find(x + 1, y - 1),
        find(x - 1, y),
        find(x + 1, y),
        find(x - 1, y + 1),
        find(x, y + 1),
        find(x + 1, y + 1)
    ]
}
function find (x, y) {
    const line = grid.value[y - 1]
    return line
        ? line.rows[x - 1]
        : null
}
function reset() {
    stop()
    count.value = 0
    grid.value = [...Array(lines.value)].map((_, i) => ({
        y: i + 1,
        rows: [...Array(cols.value)].map((_, j) => ({
            x: j + 1,
            y: i + 1,
            status: Math.round(Math.random())
        }))
    }))
}
function round() {
    grid.value = grid.value.map((line, i) => ({
        y: i + 1,
        rows: line.rows.map((row) => check(row))
    }))
    count.value = count.value + 1
    if (running.value) {
        const now = performance.now()
        fps.value = tick.value
            ? Math.round((1000 / ( now - tick.value )) * 100) / 100
            : 0
        tick.value = now
        setTimeout(round)
    }
}
function start() {
    running.value = true
    round()
}
function stop() {
    running.value = false
}
function toggle (x, y) {
    const row = find(x, y)
    if (row?.status === 0) {
        row.status = 1
    } else if(row?.status === 1) {
        row.status = 0
    }
}
function test(label, value) {
    console.log(label, value)
}
</script>
<template>
    <vui-page class="layout-default">
        <template #body>
            <div class="grid">
                <div
                    v-for="(line, i) in grid"
                    :key="`line--${i}`"
                    class="line"
                >
                    <div
                        v-for="row in line.rows"
                        :key="`row--${row.x}-${row.y}`"
                        :class="[
                            'row',
                            { 'row--alive': row.status }
                        ]"
                        @click="() => toggle(row.x, row.y)"
                    />
                </div>
            </div>
        </template>
        <template #footer>
            <vui-footer>
                <vui-tag>
                    {{ i18n.t('round') }}: {{ count }}
                </vui-tag>
                <vui-tag>
                    {{ i18n.t('fps') }}: {{ fps }}
                </vui-tag>
                <fieldset class="fieldset-item">
                    <label for="lines">
                        {{ i18n.t('lines') }}
                    </label>
                    <div class="input">
                        <vui-input
                            v-model="lines"
                            name="lines"
                            type="number"
                            :disabled="running"
                            @change="reset"
                        />
                    </div>
                </fieldset>
                <fieldset class="fieldset-item">
                    <label for="email">
                        {{ i18n.t('cols') }}
                    </label>
                    <div class="input">
                        <vui-input
                            v-model="cols"
                            name="cols"
                            type="number"
                            :disabled="running"
                            @change="reset"
                        />
                    </div>
                </fieldset>
                <vui-button @click="reset()">
                    {{ i18n.t('random') }}
                </vui-button>
                <vui-button
                    v-if="!running"
                    :disabled="running"
                    @click="start"
                >
                    {{ i18n.t('start') }}
                </vui-button>
                <vui-button
                    v-if="running"
                    :loading="running"
                    @click="stop"
                >
                    {{ i18n.t('stop') }}
                </vui-button>
            </vui-footer>
        </template>
    </vui-page>
</template>
<style
    lang="scss"
    src="./app.scss"
/>
