function changeColorAndText(buttonType) {
  const S1 = document.getElementById('S1');
  const P2 = document.getElementById('P2');
  const statusText = document.getElementById('status-text');

  switch (buttonType) {
    case 'REF':
      S1.style.transition = 'background-color 1s ease-in-out';
      S1.style.backgroundColor = '#ffffff'; // Putih

      P2.style.transition = 'background-color 1s ease-in-out';
      P2.style.backgroundColor = '#ff9100'; // Orange

      statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
      statusText.style.backgroundColor = '#ffff00'; // Kuning
      statusText.style.color = '#000';
      statusText.innerHTML = 'REF-ING';

      setTimeout(() => {
        statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
        statusText.style.backgroundColor = '#ffb700'; // Orange
        statusText.style.color = '#000';
        statusText.innerHTML = 'SETTING_UP';
      }, 300);

      setTimeout(() => {
        statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
        statusText.style.backgroundColor = '#b5b5b5'; // abu
        statusText.style.color = '#000';
        statusText.innerHTML = 'P1 ONLINE';
      }, 500);

      break;

    case 'CL':
      S1.style.transition = 'background-color 1s ease-in-out';
      S1.style.backgroundColor = '#ff0000'; // Merah
      S1.style.backgroundColor = '#1a1a1a'; // hitam

      P2.style.transition = 'background-color 1s ease-in-out';
      P2.style.backgroundColor = '#ff0000'; // Merah

      statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
      statusText.style.backgroundColor = '#ff0000'; // Merah
      statusText.style.color = '#fff';
      statusText.innerHTML = 'FW-3';

      setTimeout(() => {
        statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
        statusText.style.backgroundColor = '#000'; // Hitam
        statusText.style.color = '#fff';
        statusText.innerHTML = 'DATA BACKUPED';
      }, 200);

      setTimeout(() => {
        statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
        statusText.style.backgroundColor = '#ff0000'; // Merah
        statusText.style.color = '#fff';
        statusText.innerHTML = 'RESPONDING XLT-CL';
      }, 500);

      break;

    case 'SHUTDOWN':
      S1.style.transition = 'background-color 1s ease-in-out';
      S1.style.backgroundColor = '#000'; // Hitam

      P2.style.transition = 'background-color 1s ease-in-out';
      P2.style.backgroundColor = '#000'; // Hitam

      statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
      statusText.style.backgroundColor = '#000'; // Hitam
      statusText.style.color = '#fff';
      statusText.innerHTML = 'Shutting Down P1';

      setTimeout(() => {
        statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
        statusText.style.backgroundColor = '#000'; // Hitam
        statusText.style.color = '#fff';
        statusText.innerHTML = 'Shutdown Success';
      }, 300);

      setTimeout(() => {
        statusText.style.transition = 'background-color 1s ease-in-out, color 1s ease-in-out';
        statusText.style.backgroundColor = '#808080'; // Abu-abu
        statusText.style.color = '#000';
        statusText.innerHTML = 'P1 OFFLINE';
      }, 2000);

      break;

    default:
      break;
  }
}