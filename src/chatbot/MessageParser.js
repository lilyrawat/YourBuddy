class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
   

    const lowercase = message.toLowerCase();
    if (lowercase.includes("done")) {
      this.actionProvider.done();
    }
    else if (lowercase.includes("yes")) {
      this.actionProvider.yes();
    }
    else if (lowercase.includes("not now")) {
      this.actionProvider.not();
    }
    else if (lowercase.includes("no")) {
      this.actionProvider.no();
    }
    else if (lowercase.includes("stressed")) {
      this.actionProvider.stress();
    }
    else if (lowercase.includes("anxious")) {
      this.actionProvider.anxiety();
    }
    else if (lowercase.includes("depressed")) {
      this.actionProvider.depressed();
    }
    else if (lowercase.includes("sure")||lowercase.includes("try more")) {
      this.actionProvider.sure();
    }
    else if (lowercase.includes("exercise")) {
      this.actionProvider.exercise();
    }
    else if (lowercase.includes("peaceful music")) {
      this.actionProvider.peace();
    }
    else if (lowercase.includes("song")) {
      this.actionProvider.song();
    }
    else if (lowercase.includes("entertainment")) {
      this.actionProvider.entertainment();
    }
    else if (lowercase.includes("maybe later")||lowercase.includes("later")) {
      this.actionProvider.quit();
    }

    else {
      this.actionProvider.greet(message);
    }

  }
}

export default MessageParser;
