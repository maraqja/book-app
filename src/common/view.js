export class AbstractView { // вся папка common - типа движок

    constructor() {
        this.app = document.getElementById('root')
    }
    
    setTitle(title) {
        document.title = title;
    }

    render() {
        return;
    }

    destroy() {
        return;
    }
}