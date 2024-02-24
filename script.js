function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  
  
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
    var data = `
./images/0.webp
./images/1.webp
./images/2.webp
./images/3.webp
./images/4.webp
./images/5.webp
./images/6.webp
./images/7.webp
./images/8.webp
./images/9.webp
./images/10.webp
./images/11.webp
./images/12.webp
./images/13.webp
./images/14.webp
./images/15.webp
./images/16.webp
./images/17.webp
./images/18.webp
./images/19.webp
./images/20.webp
./images/21.webp
./images/22.webp
./images/23.webp
./images/24.webp
./images/25.webp
./images/26.webp
./images/27.webp
./images/28.webp
./images/29.webp
./images/30.webp
./images/31.webp
./images/32.webp
./images/33.webp
./images/34.webp
./images/35.webp
./images/36.webp
./images/37.webp
./images/38.webp
./images/39.webp
./images/40.webp
./images/41.webp
./images/42.webp
./images/43.webp
./images/44.webp
./images/45.webp
./images/46.webp
./images/47.webp
./images/48.webp
./images/49.webp
./images/50.webp
./images/51.webp
./images/52.webp
./images/53.webp
./images/54.webp
./images/55.webp
./images/56.webp
./images/57.webp
./images/58.webp
./images/59.webp
./images/60.webp
./images/61.webp
./images/62.webp
./images/63.webp
./images/64.webp
./images/65.webp
./images/66.webp
./images/67.webp
./images/68.webp
./images/69.webp
./images/70.webp
./images/71.webp
./images/72.webp
./images/73.webp
./images/74.webp
./images/75.webp
./images/76.webp
./images/77.webp
./images/78.webp
./images/79.webp
./images/80.webp
./images/81.webp
./images/82.webp
./images/83.webp
./images/84.webp
./images/85.webp
./images/86.webp
./images/87.webp
./images/88.webp
./images/89.webp
./images/90.webp
./images/91.webp
./images/92.webp
./images/93.webp
./images/94.webp
./images/95.webp
./images/96.webp
./images/97.webp
./images/98.webp
./images/99.webp
./images/100.webp
./images/101.webp
./images/102.webp
./images/103.webp
./images/104.webp
./images/105.webp
./images/106.webp
./images/107.webp
./images/108.webp
./images/109.webp
./images/110.webp
./images/111.webp
./images/112.webp
./images/113.webp
./images/114.webp
./images/115.webp
./images/116.webp
./images/117.webp
./images/118.webp
./images/119.webp
./images/120.webp
./images/121.webp
./images/122.webp
./images/123.webp
./images/124.webp
./images/125.webp
./images/126.webp
./images/127.webp
./images/128.webp
./images/129.webp
./images/130.webp
./images/131.webp
./images/132.webp
./images/133.webp
./images/134.webp
./images/135.webp
./images/136.webp
./images/137.webp
./images/138.webp
./images/139.webp
./images/140.webp
./images/141.webp
./images/142.webp
./images/143.webp
./images/144.webp
./images/145.webp
./images/146.webp
./images/147.webp
./images/148.webp
./images/149.webp
./images/150.webp
./images/151.webp
./images/152.webp
./images/153.webp
./images/154.webp
./images/155.webp
./images/156.webp
./images/157.webp
./images/158.webp
./images/159.webp
./images/160.webp
./images/161.webp
./images/162.webp
./images/163.webp
./images/164.webp
./images/165.webp
./images/166.webp
./images/167.webp
./images/168.webp
./images/169.webp
./images/170.webp
./images/171.webp
./images/172.webp
./images/173.webp
./images/174.webp
./images/175.webp
./images/176.webp
./images/177.webp
./images/178.webp
./images/179.webp
./images/180.webp
./images/181.webp
./images/182.webp
./images/183.webp
./images/184.webp
./images/185.webp
./images/186.webp
./images/187.webp
./images/188.webp
./images/189.webp
./images/190.webp
./images/191.webp
./images/192.webp
./images/193.webp
./images/194.webp
./images/195.webp
./images/196.webp
./images/197.webp
./images/198.webp
./images/199.webp
./images/200.webp
./images/201.webp
./images/202.webp
./images/203.webp
./images/204.webp
./images/205.webp
./images/206.webp
./images/207.webp
./images/208.webp
./images/209.webp
./images/210.webp
./images/211.webp
./images/212.webp
./images/213.webp
./images/214.webp
./images/215.webp
./images/216.webp
./images/217.webp
./images/218.webp
./images/219.webp
./images/220.webp
./images/221.webp
./images/222.webp
./images/223.webp
./images/224.webp
./images/225.webp
./images/226.webp
./images/227.webp
./images/228.webp
./images/229.webp
./images/230.webp
./images/231.webp
./images/232.webp
./images/233.webp
./images/234.webp
./images/235.webp
./images/236.webp
./images/237.webp
./images/238.webp
./images/239.webp
./images/240.webp
./images/241.webp
./images/242.webp
./images/243.webp
./images/244.webp
./images/245.webp
./images/246.webp
./images/247.webp
./images/248.webp
./images/249.webp
./images/250.webp
./images/251.webp
./images/252.webp
./images/253.webp
./images/254.webp
./images/255.webp
./images/256.webp
./images/257.webp
./images/258.webp
./images/259.webp
./images/260.webp
./images/261.webp
./images/262.webp
./images/263.webp
./images/264.webp
./images/265.webp
./images/266.webp
./images/267.webp
./images/268.webp
./images/269.webp
./images/270.webp
./images/271.webp
./images/272.webp
./images/273.webp
./images/274.webp
./images/275.webp
./images/276.webp
./images/277.webp
./images/278.webp
./images/279.webp
./images/280.webp
./images/281.webp
./images/282.webp
./images/283.webp
./images/284.webp
./images/285.webp
./images/286.webp
./images/287.webp
./images/288.webp
./images/289.webp
./images/290.webp
./images/291.webp
./images/292.webp
./images/293.webp
./images/294.webp
./images/295.webp
./images/296.webp
./images/297.webp
./images/298.webp
./images/299.webp
./images/300.webp
./images/301.webp
./images/302.webp
./images/303.webp
./images/304.webp
./images/305.webp
./images/306.webp
./images/307.webp
./images/308.webp
./images/309.webp
./images/310.webp
./images/311.webp
./images/312.webp
./images/313.webp
./images/314.webp
./images/315.webp
./images/316.webp
./images/317.webp
./images/318.webp
./images/319.webp
./images/320.webp
./images/321.webp
./images/322.webp
./images/323.webp
./images/324.webp
./images/325.webp
./images/326.webp
./images/327.webp
./images/328.webp
./images/329.webp
./images/330.webp
./images/331.webp
./images/332.webp
./images/333.webp
./images/334.webp
./images/335.webp
./images/336.webp
./images/337.webp
./images/338.webp
./images/339.webp
./images/340.webp
./images/341.webp
./images/342.webp
./images/343.webp
./images/344.webp
./images/345.webp
./images/346.webp
./images/347.webp
./images/348.webp
./images/349.webp
./images/350.webp
./images/351.webp
./images/352.webp
./images/353.webp
./images/354.webp
./images/355.webp
./images/356.webp
./images/357.webp
./images/358.webp
./images/359.webp
./images/360.webp
./images/361.webp
./images/362.webp
./images/363.webp
./images/364.webp
./images/365.webp
./images/366.webp
./images/367.webp
./images/368.webp
./images/369.webp
./images/370.webp
./images/371.webp
./images/372.webp
./images/373.webp
./images/374.webp
./images/375.webp
./images/376.webp
./images/377.webp
./images/378.webp
./images/379.webp
./images/380.webp
./images/381.webp
./images/382.webp
./images/383.webp
./images/384.webp
./images/385.webp
./images/386.webp
./images/387.webp
./images/388.webp
./images/389.webp
./images/390.webp
./images/391.webp
./images/392.webp
./images/393.webp
./images/394.webp
./images/395.webp
./images/396.webp
./images/397.webp
./images/398.webp
./images/399.webp
./images/400.webp
./images/401.webp
./images/402.webp
./images/403.webp
./images/404.webp
./images/405.webp
./images/406.webp
./images/407.webp
./images/408.webp
./images/409.webp
./images/410.webp
./images/411.webp
./images/412.webp
./images/413.webp
./images/414.webp
./images/415.webp
./images/416.webp
./images/417.webp
./images/418.webp
./images/419.webp
./images/420.webp
./images/421.webp
./images/422.webp
./images/423.webp
./images/424.webp
./images/425.webp
./images/426.webp
./images/427.webp
./images/428.webp
./images/429.webp
./images/430.webp
./images/431.webp
./images/432.webp
./images/433.webp
./images/434.webp
./images/435.webp
./images/436.webp
./images/437.webp
./images/438.webp
./images/439.webp
./images/440.webp
./images/441.webp
./images/442.webp
./images/443.webp
./images/444.webp
./images/445.webp
./images/446.webp
./images/447.webp
./images/448.webp
./images/449.webp
./images/450.webp
./images/451.webp
./images/452.webp
./images/453.webp
./images/454.webp
./images/455.webp
./images/456.webp
./images/457.webp
./images/458.webp
./images/459.webp
./images/460.webp
./images/461.webp
./images/462.webp
./images/463.webp
./images/464.webp
./images/465.webp
./images/466.webp
./images/467.webp
./images/468.webp
./images/469.webp
./images/470.webp
./images/471.webp
./images/472.webp
./images/473.webp
./images/474.webp
./images/475.webp
./images/476.webp
./images/477.webp
./images/478.webp
./images/479.webp
./images/480.webp
./images/481.webp
./images/482.webp
./images/483.webp
./images/484.webp
./images/485.webp
./images/486.webp
./images/487.webp
./images/488.webp
./images/489.webp
./images/490.webp
./images/491.webp
./images/492.webp
./images/493.webp
./images/494.webp
./images/495.webp
./images/496.webp
./images/497.webp
./images/498.webp
./images/499.webp
./images/500.webp
./images/501.webp
./images/502.webp
./images/503.webp
./images/504.webp
./images/505.webp
./images/506.webp
./images/507.webp
./images/508.webp
./images/509.webp
./images/510.webp
./images/511.webp
./images/512.webp
./images/513.webp
./images/514.webp
./images/515.webp
./images/516.webp
./images/517.webp
./images/518.webp
./images/519.webp
./images/520.webp
./images/521.webp
./images/522.webp
./images/523.webp
./images/524.webp
./images/525.webp
./images/526.webp
./images/527.webp
./images/528.webp
./images/529.webp
./images/530.webp
./images/531.webp
./images/532.webp
./images/533.webp
./images/534.webp
./images/535.webp
./images/536.webp
./images/537.webp
./images/538.webp
./images/539.webp
./images/540.webp
./images/541.webp
./images/542.webp
./images/543.webp
./images/544.webp
./images/545.webp
./images/546.webp
./images/547.webp
./images/548.webp
./images/549.webp
./images/550.webp
./images/551.webp
./images/552.webp
./images/553.webp
./images/554.webp
./images/555.webp
./images/556.webp
./images/557.webp
./images/558.webp
./images/559.webp
./images/560.webp
./images/561.webp
./images/562.webp
./images/563.webp
./images/564.webp
./images/565.webp
./images/566.webp
./images/567.webp
./images/568.webp
./images/569.webp
./images/570.webp
./images/571.webp
./images/572.webp
./images/573.webp
./images/574.webp
./images/575.webp
./images/576.webp
./images/577.webp
./images/578.webp
./images/579.webp
./images/580.webp
./images/581.webp
./images/582.webp
./images/583.webp
./images/584.webp
./images/585.webp
./images/586.webp
./images/587.webp
./images/588.webp
./images/589.webp
./images/590.webp
./images/591.webp
./images/592.webp
./images/593.webp
./images/594.webp
./images/595.webp
./images/596.webp
./images/597.webp
./images/598.webp
./images/599.webp
./images/600.webp
./images/601.webp
./images/602.webp
./images/603.webp
./images/604.webp
./images/605.webp
./images/606.webp
./images/607.webp
./images/608.webp
./images/609.webp
./images/610.webp
./images/611.webp
./images/612.webp
./images/613.webp
./images/614.webp
./images/615.webp
./images/616.webp
./images/617.webp
./images/618.webp
./images/619.webp
./images/620.webp
./images/621.webp
./images/622.webp
./images/623.webp
./images/624.webp
./images/625.webp
./images/626.webp
./images/627.webp
./images/628.webp
./images/629.webp
./images/630.webp
./images/631.webp
./images/632.webp
./images/633.webp
./images/634.webp
./images/635.webp
./images/636.webp
./images/637.webp
./images/638.webp
./images/639.webp
./images/640.webp
./images/641.webp
./images/642.webp
./images/643.webp
./images/644.webp
./images/645.webp
./images/646.webp
./images/647.webp
./images/648.webp
./images/649.webp
./images/650.webp
./images/651.webp
./images/652.webp
./images/653.webp
./images/654.webp
./images/655.webp
./images/656.webp
./images/657.webp
./images/658.webp
./images/659.webp
./images/660.webp
./images/661.webp
./images/662.webp
./images/663.webp
./images/664.webp
./images/665.webp
./images/666.webp
./images/667.webp
./images/668.webp
./images/669.webp
./images/670.webp
./images/671.webp
./images/672.webp
./images/673.webp
./images/674.webp
./images/675.webp
./images/676.webp
./images/677.webp
./images/678.webp
./images/679.webp
./images/680.webp
./images/681.webp
./images/682.webp
./images/683.webp
./images/684.webp
./images/685.webp
./images/686.webp
./images/687.webp
./images/688.webp
./images/689.webp
./images/690.webp
./images/691.webp
./images/692.webp
./images/693.webp
./images/694.webp
./images/695.webp
./images/696.webp
./images/697.webp
./images/698.webp
./images/699.webp
./images/700.webp
./images/701.webp
./images/702.webp
./images/703.webp
./images/704.webp
./images/705.webp
./images/706.webp
./images/707.webp
./images/708.webp
./images/709.webp
./images/710.webp
./images/711.webp
./images/712.webp
./images/713.webp
./images/714.webp
./images/715.webp
./images/716.webp
./images/717.webp
./images/718.webp
./images/719.webp
./images/720.webp
./images/721.webp
./images/722.webp
./images/723.webp
./images/724.webp
./images/725.webp
./images/726.webp
./images/727.webp
./images/728.webp
./images/729.webp
./images/730.webp
./images/731.webp
./images/732.webp
./images/733.webp
./images/734.webp
./images/735.webp
./images/736.webp
./images/737.webp
./images/738.webp
./images/739.webp
./images/740.webp
./images/741.webp
./images/742.webp
./images/743.webp
./images/744.webp
./images/745.webp
./images/746.webp
./images/747.webp
./images/748.webp
./images/749.webp
./images/750.webp
./images/751.webp
./images/752.webp
./images/753.webp
./images/754.webp
./images/755.webp
./images/756.webp
./images/757.webp
./images/758.webp
./images/759.webp
./images/760.webp
./images/761.webp
./images/762.webp
./images/763.webp
./images/764.webp
./images/765.webp
./images/766.webp
./images/767.webp
./images/768.webp
./images/769.webp
./images/770.webp
./images/771.webp
./images/772.webp
./images/773.webp
./images/774.webp
./images/775.webp
./images/776.webp
./images/777.webp
./images/778.webp
./images/779.webp
./images/780.webp
./images/781.webp
./images/782.webp
./images/783.webp
./images/784.webp
./images/785.webp
./images/786.webp
./images/787.webp
./images/788.webp
./images/789.webp
./images/790.webp
./images/791.webp
./images/792.webp
./images/793.webp
./images/794.webp
./images/795.webp
./images/796.webp
./images/797.webp
./images/798.webp
./images/799.webp
./images/800.webp
./images/801.webp
./images/802.webp
./images/803.webp
./images/804.webp
./images/805.webp
./images/806.webp
./images/807.webp
./images/808.webp
./images/809.webp
./images/810.webp
./images/811.webp
./images/812.webp
./images/813.webp
./images/814.webp
./images/815.webp
./images/816.webp
./images/817.webp
./images/818.webp
./images/819.webp
./images/820.webp
./images/821.webp
./images/822.webp
./images/823.webp
./images/824.webp
./images/825.webp
./images/826.webp
./images/827.webp
./images/828.webp
./images/829.webp
./images/830.webp
./images/831.webp
./images/832.webp
./images/833.webp
./images/834.webp
./images/835.webp
./images/836.webp
./images/837.webp
./images/838.webp
./images/839.webp
./images/840.webp
./images/841.webp
./images/842.webp
./images/843.webp
./images/844.webp
./images/845.webp
./images/846.webp
./images/847.webp
./images/848.webp
./images/849.webp
./images/850.webp
./images/851.webp
./images/852.webp
./images/853.webp
./images/854.webp
./images/855.webp
./images/856.webp
./images/857.webp
./images/858.webp
./images/859.webp
./images/860.webp
./images/861.webp
./images/862.webp
./images/863.webp
./images/864.webp
./images/865.webp
./images/866.webp
./images/867.webp
./images/868.webp
./images/869.webp
./images/870.webp
./images/871.webp
./images/872.webp
./images/873.webp
./images/874.webp
./images/875.webp
./images/876.webp
./images/877.webp

  `;
    return data.split("\n")[index];
  }

const frameCount = 877;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 5,
    trigger: `#page>canvas`,
    start: `top top`,
    // endTrigger:'#page9',
    end: `800% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;


function render() {
    scaleImage(images[imageSeq.frame], context);
  }

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }



ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    // endTrigger:'#page9',
    end: `900% top`,
  });



function page(){

  const animated = gsap.utils.toArray('#latter h1');
  
 
  let tl = gsap.timeline({repeat:-1});

  animated.forEach((i) => {
        tl.from(i, {
            opacity:0,
            y: '100',
            duration: 1,
        });
        tl.to(i, {
            opacity:0,
        });
    })
  
  gsap.to('#latter',{
    y:'-300',
    opacity:0,
    scrollTrigger:{
      trigger:'#animated-word',
      start:'-200 top',
      end:'bottom top',
      scrub:true,
      scroller:'#main'
    }
  })
}

page();


function page1(){

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page1-left-small1',
      start:'-400 top',
      end:'180 500',
      scrub:1,
      scroller:'#main',
    }
  });
    tl.from('#page1-left-small1 h1',{
      y:'100',
      duration:5,
      stagger:2,
    }),
    tl.to('#page1-left-small1 h1',{
      delay:5,
      opacity:0,
      y:'-100',
      duration:5,
      stagger:2,
    });

    let tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:'#page1-left-small2',
        start:'-400 top',
        end:'200 500',
        scrub:1,
        scroller:'#main',
      }
    });
      tl2.from('#page1-left-small2 h1',{
        y:'100',
        duration:5,
        stagger:2,
      }),
      tl2.to('#page1-left-small2 h1',{
        delay:5,
        opacity:0,
        y:'-100',
        duration:5,
        stagger:2,
      })
  

}

page1();

function page2(){

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page2',
      start:'bottom bottom',
      end:'900 bottom',
      scrub:5,
      scroller:'#main',
      pin:true
    }
  });
  tl.from('#page2-right,#page2-left',{
    y:`100%`,
    duration:2,
  });
  tl.from('#page2-center',{
    opacity:0,
    y:'100%',
    duration:1,
  });
  tl.to('#page2-left,#page2-right,#page2-center',{
    y:`-100%`,
    opacity:0,
    duration:2,
  });

  
};

page2();

function page3(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page3-text',
      start:'top center',
      end:'bottom center',
      scrub:1,
      scroller:'#main',
    }
  });

  tl.from('#page3-text h1',{
    y:'100%',
    duration:2,
  })
  tl.to('#page3-text h1',{
    delay:3,
    y:'-100%',
    duration:2,
  })

  let tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'#page3-text2',
      start:'top center',
      end:'100 center',
      scrub:1,
      scroller:'#main',
    }
  });

  tl2.from('#page3-text2 h1',{
    y:'100%',
    duration:2,
  })
  tl2.to('#page3-text2 h1',{
    delay:3,
    y:'-100%',
    duration:2,
  })



}

page3()

function page4(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page4-text',
      start:'bottom bottom',
      end:'200 bottom',
      scrub:1,
      scroller:'#main',
    }
  });
  tl.from('#page4-text h1',{
    y:'100%',
    duration:2,
  })
  tl.to('#page4-text h1',{
    delay:3,
    y:'-100%',
    duration:2,
  });


  let tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'#page4',
      start:'bottom bottom',
      end:'800 bottom',
      scrub:1,
      scroller:'#main',
      pin:true,
    }
  });
  tl2.from('#page4-left,#page4-right',{
    y:'100%',
    duration:2,
  });
  tl2.from('#page4-center',{
    opacity:0,
    y:'100%',
    duration:2,
  });
  tl2.to('#page4-center',{
    delay:3,
    opacity:0,
    y:'-100%',
    duration:2,
  });
  tl2.to('#page4-left,#page4-right',{
    delay:3,
    opacity:0,
    y:'-100%',
    duration:2,
  });
}

page4();

function page5(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page5-text',
      start:'top bottom',
      end:'200 bottom',
      scrub:1,
      scroller:'#main',
    }
  });
  tl.from('#page5-text h1',{
    y:'100%',
    opacity:0,
    duration:2
  })
  tl.to('#page5-text h1',{
    y:'-100%',
    duration:2
  })
}

page5()


function page6(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page6-text',
      start:'top center',
      end:'bottom center',
      scrub:1,
      scroller:'#main',
    }
  });
  tl.from('#page6-text h1',{
    y:'100%',
    opacity:0,
    duration:2
  })
  tl.to('#page6-text h1',{
    y:'-100%',
    duration:2
  })
}

page6()

function page7(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page7',
      start:'bottom bottom',
      end:'800 bottom',
      scrub:1,
      scroller:'#main',
      pin:true,
    }
  });
  tl.from('#page7-left,#page7-right',{
    y:'100%',
    duration:2,
  });
  tl.from('#page7-center',{
    opacity:0,
    y:'100%',
    duration:2,
  });
  tl.to('#page7-center',{
    delay:3,
    opacity:0,
    y:'-100%',
    duration:2,
  });
  tl.to('#page7-left,#page7-right',{
    delay:3,
    opacity:0,
    y:'-100%',
    duration:2,
  });
}

page7();

function page8(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page8',
      start:'bottom bottom',
      end:'600 bottom',
      scrub:1,
      scroller:'#main'
    }
  });
  tl.from('#page8-text h1',{
    y:'100%',
    duration:4
  })
  tl.to('#page8-text h1',{
    delay:5,
    y:'-100%',
    duration:4
  })
}

page8();

function page9(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#page9',
      start:'bottom bottom',
      end:'bottom bottom',
      scrub:1,
      scroller:'#main'
    }
  });
  tl.to('#page',{
    y:'-100vh',
  })
  tl.set('#product', { css: { opacity: 1 } },'-=.5');
}

page9();


function page10(){

  const width = document.querySelector('#page10').scrollWidth;

  let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#page10',
        start:'top top',
        end:`+=${width - window.innerWidth}`,
        scrub:1,
        pin:true,
        scroller:'#main'
    }
  });
  tl.to('#page10',{
    x: `-${width - window.innerWidth}`,
  })

}

page10();


document.addEventListener('DOMContentLoaded',() =>{
  setTimeout(() => {
    upword();
    }, 10000);
    function upword(){
      document.querySelector('#main').style.height = 'auto';
      gsap.to('.loader',{
        y:'-100%',
      })
    }
})
