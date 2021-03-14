import { Controller } from 'stimulus';

export default class extends Controller {
  static values = { url: String, refreshInterval: Number };

  startRefreshing() {
    setInterval(() => {
      this.load();

    }, this.refreshInterval);
  }

  connect() {
    this.load();
    if (this.hasRefreshInternalValue) {
      this.startRefreshing();

    }
  }

  load() {
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html);
  }
}