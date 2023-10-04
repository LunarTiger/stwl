<hr style="height:50px; visibility:hidden;" />
<!--Fuck Altspace. Maybe if they could ever get their shit together I may bring my event back to the platform.
<p>Altspace Channel:&nbsp;&nbsp;<a href="https://account.altvr.com/channels/storytime" target="_blank" id="channel">sdq.st/stwl-altvr</a></p>
<!---->
<p id="nextEvent"></p>
<p>Discord Server:&nbsp;&nbsp;<a href="https://discord.gg/DbQF7ze" id="discord">sdq.st/stwl-discord</a></p>
<p>Archived Readings:&nbsp;&nbsp;<a href="/stwl/archive" id="archive">sdq.st/stwl-archive</a></p>
<p><a href="banter://lunartiger.github.io/stwl" id="banter">Open in Banter</a></p>
<script src="/stwl/assets/js/event.js"></script>
<script>
  let locked=false;
  // a simple aframe component to handle the click to open my website
  AFRAME.registerComponent('lock-unlock', {
    init: function () {
      // When you click on an element, run the animation on the parent element
      this.el.addEventListener('click', () => {
        if(locked) {
          unlockPlayer();
          locked=false;
        }else {
          lockPlayer();
          locked=true;
        }
      })
    }
  });
</script>
<div style="display: none;" id="aScene"><a-scene sq-disableteleport sq-spawnpoint="position: 5 0 -25 201;" sq-maxoccupancy="number: 12" sq-clippingplane="near: 0.09; far: 1666;" sq-guestsallowed="false" sq-friendpositionjoinallowed="false" sq-devtoolsenabled="false" sq-portalsenabled="false" sq-refreshrate="rate:90" sq-assetbundle="android: https://lunartiger.github.io/stwl/assets/storytime_android?v6; desktop: https://lunartiger.github.io/stwl/assets/storytime_standalonewindows?v6;" embedded>
  <a-box sq-collider sq-interactable lock-unlock color="#000" position="-6.08 6.14 -11.89" rotation="0 0 0" scale="0.3 0.3 0" material="transparent: true; opacity: 0"></a-box>
  <script src="https://sq-community.glitch.me/gotoButton.js" position="-8.25 1 -9.6" scale="0.5"></script>
</a-scene></div>