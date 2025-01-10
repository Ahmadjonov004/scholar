document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    const botToken = '7427307380:AAFwkxZqOL5QQTZBrATPFA27GZXMr17TJMM'; 
    const chatId = '5743378123'; 
  
    const text = `👤 Имя: ${name}\n📧 Email: ${phone}\n📞 Сообщение: ${message}`;
  
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: text })
    })
      .then(response => {
        if (response.ok) {
          alert('Сообщение успешно отправлено в Telegram!');
          document.getElementById('contact-form').reset(); 
        } else {
          alert('Произошла ошибка при отправке сообщения.');
        }
      })
      .catch(error => {
        console.error('Ошибка:', error);
        alert('Не удалось отправить сообщение.');
      });
  });
  