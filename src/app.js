import { MainView } from "./views/main/main";



class App {
    routes = [
        {path: "", view: MainView}
    ]
    appState = {
        favorites: []
    }
    constructor() {
        window.addEventListener('hashchange', this.route.bind(this)) // биндим на контекст класса, т.к. оно ссылается на контекст window
        this.route()
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy()
        }
        const view = this.routes.find(r => r.path == location.hash).view
        this.currentView = new view(this.appState)
        this.currentView.render()
    }
}

new App();

// Реактивность обеспечивает слежение за объектом: когда видим обновления объекта - триггерим необходимую функцию