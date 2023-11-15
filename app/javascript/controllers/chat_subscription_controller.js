console.log("Chat subscription controller loaded!")
import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"
// Connects to data-controller="chat-subscription"
export default class extends Controller {
  static values = { chatId: Number}
  static targets = ["messages"]
  connect() {
    console.log("test");
    this.channel = createConsumer().subscriptions.create(
      { channel: "ChatChannel", id: this.chatIdValue },
      { received: data => console.log(data) }
    )
    console.log(`Subscribe to the chat with the id ${this.chatIdValue}.`)
  }
}
