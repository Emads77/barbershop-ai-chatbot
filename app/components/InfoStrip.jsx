export default function InfoStrip() {
  const infoItems = [
    { icon: '👋', text: 'Walk-ins Welcome' },
    { icon: '🕐', text: 'Mon–Sat 9am–8pm' },
    { icon: '📍', text: '123 Main Street Downtown' },
    { icon: '📞', text: '(555) 012-3456' },
  ];

  return (
    <section className="info-strip">
      <div className="info-container">
        {infoItems.map((item, index) => (
          <div key={index} className="info-item">
            <span className="info-icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
