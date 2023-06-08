import { AbstractView } from "../../common/view.js"
import onChange from 'on-change';

export class MainView extends AbstractView {

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0 // это для пагинации
    }

    constructor(appState) {
        super();
        this.appState = appState
        this.appState = onChange(this.appState, this.appStateHook.bind(this)) // подписались на глобальный стейт, bind(this), т.к. иначе контекстом будет контекст библиотеки onChange(Proxy какое-то)
        this.setTitle('Поиск книг')
    }

    appStateHook(path) {
        console.log(this)
        console.log(path)
        // if (path === 'favorites') {
        //     this.render()
        // }
    }

    render() {
        const main = document.createElement('div')
        main.innerHTML = `Число книг: ${this.appState.favorites.length}`
        this.app.innerHTML = ''
        this.app.append(main)
        this.appState.favorites.push('d')
    }
}