function time() {
      const curr = new Date();
      const hour = curr.getHours();
      const minutes = curr.getMinutes();
      const seconds = curr.getSeconds();
      document.getElementById("room-title").value =  `íėŽėę°=${hour}:${minutes}:${seconds}`;
      document.getElementById('room-ok').click();
      setTimeout(loop, 50);
};

function loop() {
      document.getElementById('SetRoomBtn').click();
      setTimeout(time, 50);
};

loop();
