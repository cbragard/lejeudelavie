<template>
    <div class="app">
        <div class="grid">
            <div 
                class="line" 
                v-for="(line, i) in grid"
                :key="`line--${i}`">
                <div
                    v-for="row in line.rows"
                    :key="`${row.x}-${row.y}`"
                    @click="toggle(row.x, row.y)"
                    :class="[
                        'row',
                        { 'alive': row.status }
                    ]">
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="control">
                Round: {{  count }}
            </div>
            <div class="control">
                <div class="label">
                    Reset
                </div>
                <button v-on:click="empty(false)">
                    empty
                </button>
                <button v-on:click="empty(true)">
                    random
                </button>
            </div>
            <div class="control">
                <div class="label">
                    Lines / Cols
                </div>
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
            <div class="control">
                <div class="label">
                    Evolution
                </div>
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
            <div class="control">
                <button
                    :disabled="this.running"
                    v-on:click="round()">
                        +1 round
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
