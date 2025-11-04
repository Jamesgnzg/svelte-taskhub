import type { Component } from 'svelte';

export interface TabItem {
	title: string;
	value: number;
	content: Component;
}
