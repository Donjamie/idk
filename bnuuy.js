function getRandomEmoji() {
  const emojis = ['👀', '🐸', '🍌', '🎉', '🌟', '🔥', '👍', '😀', ':)', ':D', 'ᗜˬᗜ', 'bnuuy ™️'];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function handleCommand({ command, message }) {
  if (command === '/bnuuy') {
    const emoji = getRandomEmoji();
    message.channel.send(`bnuuy ${emoji}`);
  }
}

// Register the plugin
window.enmity.plugins.registerPlugin({
  name: 'RandomEmojiPlugin',
  version: '1.0.0',
  description: 'Responds with a random emoji when you type /bnuuy',
  authors: ['Your Name'],
  color: '#ff69b4', // You can choose a color for your plugin
  onStart: () => {
    // Register a command handler for /bnuuy
    window.enmity.modules.common.Dispatcher.subscribe('CHAT_COMMAND', handleCommand);
  },
  onStop: () => {
    // Unsubscribe from the command handler when the plugin is stopped
    window.enmity.modules.common.Dispatcher.unsubscribe('CHAT_COMMAND', handleCommand);
  },
});
