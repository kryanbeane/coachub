import { writable } from 'svelte/store';

const messageStore = writable({ show: false, message: '', type: 'error' })

export default {
    subscribe: messageStore.subscribe,
    showError: function (message: string) {
        console.log("aaaa", message)
        messageStore.set({ show: true, message, type: 'error' })
    },
    showSuccess: function (message: string) {
        messageStore.set({ show: true, message, type: 'success' })
    },
    hide: function () {
        messageStore.set({ show: false, message: '', type: 'success' })
    }
}