export function getTerminalDate(): string {
  const now = new Date();
  
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short', 
    day: 'numeric'
  });
  
  const timeString = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return `${dateString} ${timeString}`;
}
