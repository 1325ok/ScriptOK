function time() {
      const curr = new Date();
      const hour = curr.getHours();
      const minutes = curr.getMinutes();
      const seconds = curr.getSeconds();
      document.getElementById("room-title").value =  `현재시간=${hour}:${minutes}:${seconds}`;
      document.getElementById('room-ok').click();
      setTimeout(loop, 50);
};

function loop() {
      document.getElementById('SetRoomBtn').click();
      setTimeout(time, 50);
};

loop();
