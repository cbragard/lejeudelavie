<template>
    <div class="app">
        <div class="grid">
            <div
                class="line"
                v-for="(line, i) in grid"
                :key="`line--${i}`"
            >
                <div
                    v-for="row in line.rows"
                    :key="`${row.x}-${row.y}`"
                    @click="() => toggle(row.x, row.y)"
                    :class="[
                        'row',
                        { 'row--alive': row.status }
                    ]">
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="control">
                {{ $t('round') }}: {{  count }}
            </div>
            <div class="control">
                {{ $t('fps') }}: {{  fps }}
            </div>
            <div class="control">
                <div class="label">
                    {{ $t('reset') }}
                </div>
                <button v-on:click="empty(false)">
                    {{ $t('empty') }}
                </button>
                <button v-on:click="empty(true)">
                    {{ $t('random') }}
                </button>
            </div>
            <div class="control">
                <div class="label">
                    {{ $t('line-cols') }}
                </div>
                <input
                    type="number"
                    :disabled="this.running"
                    @change="() => empty(false)"
                    v-model.lazy="lines"
                />
                <input
                    type="number"
                    :disabled="this.running"
                    @change="() => empty(false)"
                    v-model.lazy="cols"
                />
            </div>
            <div class="control">
                <div class="label">
                    {{ $t('evolution') }}
                </div>
                <button
                    :disabled="this.running"
                    v-on:click="start"
                >
                    {{ $t('start') }}
                </button>
                <button
                    :disabled="!this.running"
                    v-on:click="stop"
                >
                    {{ $t('stop') }}
                </button>
            </div>
            <div class="control">
                <button
                    :disabled="this.running"
                    v-on:click="round"
                >
                    {{ $t('plus-one-round') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script
    src="./app.js"
/>

<style
    lang="scss"
    src="./app.scss"
/>
