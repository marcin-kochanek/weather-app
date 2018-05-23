// SVG icons
const getWeatherSVGIcon = (weatherDataIcon) => {
  const sun =
    `<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>Sunlights</title>
        <circle stroke="#000000" id="svg_22" r="100" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
        <circle id="svg_1" stroke="#000000" r="80" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
      </g>
      <g>
        <title>Sun</title>
        <circle stroke="#000000" id="svg_8" r="60" cy="120.5" cx="106.5" opacity="0.95" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
        <ellipse fill="#f9fc55" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="-349.5" cy="51" id="svg_2"/>
      </g>
    </svg>`;

  const moon = 
    `<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>Layer 1</title>
        <circle fill="#ffffff" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" opacity="0.95" cx="106.5" cy="120.5" r="60" id="svg_8" stroke="#000000"/>
        <ellipse id="svg_2" cy="51" cx="-349.5" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#ffffff"/>
      </g>
      <g>
        <title>Layer 2</title>
        <circle fill="#ffffed" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" fill-opacity="0.6" opacity="0.3" cx="106.5" cy="120.5" r="80" id="svg_22" stroke="#000000"/>
        <circle id="svg_7" fill="#ffffed" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" fill-opacity="0.8" opacity="0.3" cx="106.5" cy="120.5" r="70" stroke="#000000"/>
        <circle stroke="#000000" id="svg_9" r="10.57107" cy="82.5" cx="93.5" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
        <circle id="svg_10" stroke="#000000" r="10.57107" cy="95.5" cx="142" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
        <circle stroke="#000000" id="svg_11" r="6.07106" cy="113.5" cx="75.49999" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
        <circle id="svg_13" stroke="#000000" r="6.07106" cy="75.5" cx="123.99999" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
        <circle id="svg_1" stroke="#000000" r="6.07106" cy="137.5" cx="119.99999" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
      </g>
    </svg>`;

  const fewCloudsSun = `
    <svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>sunlights</title>
        <circle stroke="#000000" id="svg_22" r="100" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
        <circle id="svg_1" stroke="#000000" r="80" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
      </g>
      <g>
        <title>sun</title>
        <circle stroke="#000000" id="svg_8" r="60" cy="120.5" cx="106.5" opacity="0.95" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
        <ellipse fill="#f9fc55" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="-349.5" cy="51" id="svg_2"/>
      </g>
      <g>
        <title>clouds</title>
        <g id="svg_11" stroke="null">
          <ellipse id="svg_5" transform="matrix(0.5388334961617514,0.047101098577992245,-0.04714182244219272,0.5383680202639693,113.69586183474632,134.49262010985427) " fill="#d4e6f9" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="57.60381" cy="132.64904" rx="80" ry="43.5" stroke="#000000"/>
          <ellipse id="svg_9" transform="matrix(0.5388334961617514,0.047101098577992245,-0.04714182244219272,0.5383680202639693,111.66650720094918,135.53667294652504) " fill="#d4e6f9" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="33.60381" cy="90.64904" rx="114" ry="59" stroke="#000000"/>
        </g>
        <g stroke="null" id="svg_12">
          <ellipse stroke="#000000" id="svg_13" transform="matrix(0.3374267176110608,0.030862732575004968,-0.02952101256173107,0.35276264753844305,178.8892137388621,167.19766069408163) " fill="#d4e6f9" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="-390.84829" cy="-21.091" rx="80" ry="43.5"/>
          <ellipse stroke="#000000" id="svg_14" transform="matrix(0.3374267176110608,0.030862732575004968,-0.02952101256173107,0.35276264753844305,177.61839728474655,167.88177050181764) " fill="#d4e6f9" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="-414.84829" cy="-63.091" rx="114" ry="59"/>
        </g>
      </g>
    </svg>`;

  const fewCloudsMoon = `
    <svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>moon</title>
        <circle fill="#ffffff" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" opacity="0.95" cx="106.5" cy="120.5" r="60" id="svg_8" stroke="#000000"/>
        <ellipse id="svg_2" cy="51" cx="-349.5" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#ffffff"/>
        </g>
        <g>
        <title>moon spots</title>
        <circle fill="#ffffed" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" fill-opacity="0.6" opacity="0.3" cx="106.5" cy="120.5" r="80" id="svg_22" stroke="#000000"/>
        <circle id="svg_7" fill="#ffffed" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" fill-opacity="0.8" opacity="0.3" cx="106.5" cy="120.5" r="70" stroke="#000000"/>
        <circle stroke="#000000" id="svg_9" r="10.57107" cy="82.5" cx="93.5" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
        <circle id="svg_10" stroke="#000000" r="10.57107" cy="95.5" cx="142" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
        <circle stroke="#000000" id="svg_11" r="6.07106" cy="113.5" cx="75.49999" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
        <circle id="svg_13" stroke="#000000" r="6.07106" cy="75.5" cx="123.99999" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#e8e8e8"/>
      </g>
      <g>
        <title>clouds</title>
        <g stroke="null" id="svg_11">
          <ellipse stroke="#000000" ry="43.5" rx="80" cy="132.64904" cx="57.60381" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#495073" transform="matrix(0.5388334961617514,0.047101098577992245,-0.04714182244219272,0.5383680202639693,113.69586183474632,134.49262010985427) " id="svg_5"/>
          <ellipse stroke="#000000" ry="59" rx="114" cy="90.64904" cx="33.60381" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#495073" transform="matrix(0.5388334961617514,0.047101098577992245,-0.04714182244219272,0.5383680202639693,111.66650720094918,135.53667294652504) " id="svg_9"/>
        </g>
        <g id="svg_12" stroke="null">
          <ellipse ry="43.5" rx="80" cy="-21.091" cx="-390.84829" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#495073" transform="matrix(0.3374267176110608,0.030862732575004968,-0.02952101256173107,0.35276264753844305,178.8892137388621,167.19766069408163) " id="svg_13" stroke="#000000"/>
          <ellipse ry="59" rx="114" cy="-63.091" cx="-414.84829" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#495073" transform="matrix(0.3374267176110608,0.030862732575004968,-0.02952101256173107,0.35276264753844305,177.61839728474655,167.88177050181764) " id="svg_14" stroke="#000000"/>
        </g>
      </g>
    </svg>`;

    const cloudySun = 
      `<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g>
          <title>Sunlights</title>
          <circle stroke="#000000" id="svg_22" r="100" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
          <circle id="svg_1" stroke="#000000" r="80" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
        </g>
        <g>
          <title>Sun</title>
          <circle stroke="#000000" id="svg_8" r="60" cy="120.5" cx="106.5" opacity="0.95" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
          <ellipse fill="#f9fc55" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="-349.5" cy="51" id="svg_2"/>
        </g>
        <g display="inline">
          <title>cloud2</title>
          <ellipse id="svg_8" ry="43.5" rx="80" cy="139" cx="153.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#d4e6f9" stroke="#000000"/>
        </g>
        <g>
          <title>cloud</title>
          <ellipse id="svg_6" ry="59" rx="114" cy="173" cx="120.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#d4e6f9" stroke="#000000"/>
        </g>
      </svg>`;

  const cloudyMoon = 
    `<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>Layer 1</title>
        <circle stroke="#000000" id="svg_8" r="60" cy="120.5" cx="106.5" opacity="0.95" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#ffffff"/>
        <ellipse fill="#ffffff" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="-349.5" cy="51" id="svg_2"/>
      </g>
      <g>
        <title>Layer 2</title>
        <circle stroke="#000000" id="svg_22" r="80" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.6" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#ffffed"/>
        <circle stroke="#000000" r="70" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#ffffed" id="svg_7"/>
        <circle fill="#e8e8e8" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="93.5" cy="82.5" r="10.57107" id="svg_9" stroke="#000000"/>
        <circle fill="#e8e8e8" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="142" cy="95.5" r="10.57107" stroke="#000000" id="svg_10"/>
        <circle fill="#e8e8e8" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="75.49999" cy="113.5" r="6.07106" id="svg_11" stroke="#000000"/>
        <circle fill="#e8e8e8" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="123.99999" cy="75.5" r="6.07106" stroke="#000000" id="svg_13"/>
      </g>
      <g display="inline">
        <title>cloud2</title>
        <ellipse id="svg_8" ry="43.5" rx="80" cy="139" cx="153.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#686F93" stroke="#000000"/>
      </g>
      <g>
        <title>cloud</title>
        <ellipse id="svg_6" ry="59" rx="114" cy="173" cx="120.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#686F93" stroke="#000000"/>
      </g>
    </svg>`;

  const clouds = (color) => {
    return `
      <svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g display="inline">
          <title>cloud2</title>
          <ellipse id="svg_8" ry="43.5" rx="80" cy="106" cx="148.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 148.4999999999998,106.00000000000004) "/>
        </g>
        <g display="inline">
          <title>cloud</title>
          <ellipse id="svg_6" ry="59" rx="114" cy="62" cx="115.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 115.5000000000002,62.000000000000085) "/>
        </g>
        <g>
          <title>cloud 3</title>
          <g stroke="null" id="svg_11">
            <ellipse stroke="#000000" ry="43.5" rx="80" cy="132.64904" cx="57.60381" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} transform="matrix(0.5388334961617514,0.047101098577992245,-0.04714182244219272,0.5383680202639693,113.69586183474632,134.49262010985427) " id="svg_5"/>
            <ellipse stroke="#000000" ry="59" rx="114" cy="90.64904" cx="33.60381" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} transform="matrix(0.5388334961617514,0.047101098577992245,-0.04714182244219272,0.5383680202639693,111.66650720094918,135.53667294652504) " id="svg_9"/>
          </g>
          <g id="svg_12" stroke="null">
            <ellipse ry="43.5" rx="80" cy="-21.091" cx="-390.84829" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} transform="matrix(0.3374267176110608,0.030862732575004968,-0.02952101256173107,0.35276264753844305,178.8892137388621,167.19766069408163) " id="svg_13" stroke="#000000"/>
            <ellipse ry="59" rx="114" cy="-63.091" cx="-414.84829" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} transform="matrix(0.3374267176110608,0.030862732575004968,-0.02952101256173107,0.35276264753844305,177.61839728474655,167.88177050181764) " id="svg_14" stroke="#000000"/>
          </g>
        </g>
      </svg>`;
  };

  const rain = (color) => {
    return `
    <svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>rain</title>
        <line id="svg_29" stroke-opacity="0.3" fill-opacity="0" y2="186.5" x2="79" y1="124.5" x1="127" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_31" y2="173" x2="106" y1="143" x1="128" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_33" y2="193.5" x2="148" y1="163.5" x1="170" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_40" y2="178" x2="186.25" y1="148" x1="208.25" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_45" stroke-opacity="0.3" fill-opacity="0" y2="194.25" x2="44.75" y1="132.25" x1="92.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_49" y2="144.25" x2="19" y1="114.25" x1="41" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_7" fill-opacity="0" y2="222.75" x2="108.5" y1="160.75" x1="156.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_1" fill-opacity="0" y2="203.5" x2="101.375" y1="141.5" x1="149.375" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_3" y2="174" x2="94.375" y1="144" x1="116.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_17" y2="151.25" x2="45.375" y1="121.25" x1="67.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_20" y2="173" x2="67.375" y1="143" x1="89.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line stroke=${color} id="svg_22" fill-opacity="0" y2="191" x2="85.375" y1="153" x1="113.375" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
        <line id="svg_24" fill-opacity="0" y2="181" x2="31.375" y1="119" x1="79.375" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_41" y2="201" x2="134.625" y1="171" x1="156.625" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line id="svg_53" y2="176" x2="109.375" y1="146" x1="131.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        <line y2="185.875" x2="69.25" y1="155.875" x1="91.25" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_25"/>
        <line y2="192.875" x2="99.625" y1="162.875" x1="121.625" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_57"/>
        <line y2="170.625" x2="84.625" y1="140.625" x1="106.625" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_61"/>
        <line y2="181.75" x2="129.9375" y1="151.75" x1="151.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_66"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="180.5" x2="139.0625" y1="118.5" x1="187.0625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_72"/>
        <line y2="202.75" x2="29.9375" y1="172.75" x1="51.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_78"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="170.5" x2="14.6875" y1="108.5" x1="62.6875" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_79"/>
        <line y2="158" x2="59.9375" y1="128" x1="81.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_80"/>
        <line y2="184.5" x2="38.9375" y1="154.5" x1="60.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_81"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="186" x2="9.0625" y1="124" x1="57.0625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_85"/>
        <line y2="144" x2="29.3125" y1="114" x1="51.3125" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_87"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="188.625" x2="163.1875" y1="126.625" x1="211.1875" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_23"/>
        <line fill-opacity="0" y2="135.625" x2="10.5625" y1="73.625" x1="58.5625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_51"/>
        <line stroke=${color} fill-opacity="0" y2="179.125" x2="165.5625" y1="141.125" x1="193.5625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_76"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="183.125" x2="164.25" y1="121.125" x1="212.25" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_92"/>
        <line fill-opacity="0" y2="188.5" x2="11" y1="126.5" x1="59" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_2"/>
        <line fill-opacity="0" y2="226.5" x2="29" y1="164.5" x1="77" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_4"/>
        <line fill-opacity="0" y2="179.5" x2="-13" y1="117.5" x1="35" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_5"/>
        <line stroke=${color} fill-opacity="0" y2="217.5" x2="71" y1="179.5" x1="99" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_9"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="236.5" x2="42" y1="174.5" x1="90" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_10"/>
        <line y2="116.5" x2="9" y1="86.5" x1="31" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_12"/>
        <line fill-opacity="0" y2="133" x2="-15" y1="71" x1="33" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_13"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="143" x2="-2" y1="81" x1="46" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_14"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="124" x2="-42" y1="62" x1="6" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_15"/>
      </g>
      <g display="inline">
        <title>cloud2</title>
        <ellipse id="svg_8" ry="43.5" rx="80" cy="95" cx="146.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 123.99999999999977,52.99999999999994) "/>
      </g>
      <g>
        <title>cloud</title>
        <ellipse id="svg_6" ry="59" rx="114" cy="63" cx="116.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 116.4999999999998,63.0000000000001) "/>
      </g>
    </svg>`;
  };

  const lightRain = (color) => {
    return `
    <svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g display="inline">
        <title>rain</title>
        <g transform="rotate(15 98.21786499023426,156.58596801757812) " id="svg_52">
          <line stroke=${color} transform="rotate(18 45.40619659423823,173.56251525878906) " id="svg_29" y2="175.81252" x2="46.24995" y1="171.31252" x1="44.56245" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_37" transform="rotate(23 94.90619659423828,192.68751525878906) " y2="194.93752" x2="95.74995" y1="190.43752" x1="94.06245" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_38" stroke=${color} transform="rotate(18 94.06484222412105,165.40614318847656) " y2="167.65614" x2="94.9086" y1="163.15614" x1="93.2211" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_47" stroke=${color} transform="rotate(18 94.06482696533197,165.4061431884766) " y2="167.65614" x2="94.90859" y1="163.15614" x1="93.22109" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_50" stroke=${color} transform="rotate(18 55.531242370605355,191.8436431884766) " y2="194.09364" x2="56.37501" y1="189.59364" x1="54.68751" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_64" transform="rotate(23 62.84374999999993,182) " y2="184.25" x2="63.68751" y1="179.75" x1="62.00001" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_65" transform="rotate(23 18.968757629394574,180.875) " y2="183.125" x2="19.81251" y1="178.625" x1="18.12501" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_68" transform="rotate(23 62.84376525878888,182.00000000000003) " y2="184.25" x2="63.6875" y1="179.75" x1="62" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_71" transform="rotate(23 107.84375762939467,154.99999999999997) " y2="157.25" x2="108.68751" y1="152.75" x1="107.00001" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_75" transform="rotate(23 113.1851654052735,182.56250000000003) " y2="184.8125" x2="114.02891" y1="180.3125" x1="112.34141" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_77" transform="rotate(23 178.71876525878906,136.4375) " y2="138.6875" x2="179.56251" y1="134.1875" x1="177.87501" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_87" stroke=${color} transform="rotate(18 60.59138488769523,147.4061431884766) " y2="149.65614" x2="61.43516" y1="145.15614" x1="59.74766" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_88" transform="rotate(23 53.27891540527335,164.28114318847656) " y2="166.53114" x2="54.12265" y1="162.03114" x1="52.43515" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_89" transform="rotate(23 24.02890014648434,136.4375) " y2="138.6875" x2="24.87266" y1="134.1875" x1="23.18516" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_90" transform="rotate(23 45.96641540527351,176.37499999999997) " y2="178.625" x2="46.81016" y1="174.125" x1="45.12266" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_91" transform="rotate(23 29.37031555175772,164.00000000000003) " y2="166.25" x2="30.21406" y1="161.75" x1="28.52656" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_92" stroke=${color} transform="rotate(18 8.653869628906167,153.06239318847656) " y2="155.3124" x2="9.49766" y1="150.8124" x1="7.81016" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_93" transform="rotate(23 1.3414306640624223,169.9374084472656) " y2="172.1874" x2="2.18515" y1="167.6874" x1="0.49765" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_3" transform="rotate(23 143.2824401855469,130.09385681152344) " y2="132.34386" x2="144.12618" y1="127.84386" x1="142.43868" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_4" stroke=${color} transform="rotate(18 96.0300598144531,122.5) " y2="124.75" x2="96.87383" y1="120.25" x1="95.18633" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_5" transform="rotate(23 88.71755981445312,139.37499999999997) " y2="141.625" x2="89.56132" y1="137.125" x1="87.87382" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_7" stroke=${color} transform="rotate(18 41.50350952148451,146.49999999999997) " y2="148.75" x2="42.34727" y1="144.25" x1="40.65977" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_9" stroke=${color} transform="rotate(18 41.50350952148451,146.49999999999997) " y2="148.75" x2="42.34726" y1="144.25" x1="40.65976" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_10" transform="rotate(23 55.282440185546854,136.09385681152344) " y2="138.34386" x2="56.12618" y1="133.84386" x1="54.43868" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_12" stroke=${color} transform="rotate(18 8.030059814453157,128.5) " y2="130.75" x2="8.87383" y1="126.25" x1="7.18633" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_13" transform="rotate(23 0.717590332031319,145.37499999999997) " y2="147.625" x2="1.56132" y1="143.125" x1="-0.12618" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_14" stroke=${color} transform="rotate(18 113.50350952148435,169.5) " y2="171.75" x2="114.34727" y1="167.25" x1="112.65977" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_15" stroke=${color} transform="rotate(18 113.50350952148435,169.5) " y2="171.75" x2="114.34726" y1="167.25" x1="112.65976" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_17" stroke=${color} transform="rotate(18 80.03005981445314,151.5) " y2="153.75" x2="80.87383" y1="149.25" x1="79.18633" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_18" transform="rotate(23 72.7175903320313,168.375) " y2="170.625" x2="73.56132" y1="166.125" x1="71.87382" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_22" transform="rotate(23 195.71817016601565,126.82806396484375) " y2="129.07807" x2="196.56191" y1="124.57807" x1="194.87441" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_23" transform="rotate(23 160.28186035156264,120.48443603515624) " y2="122.73443" x2="161.12559" y1="118.23443" x1="159.43809" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line stroke=${color} transform="rotate(18 80.03005981445314,151.5) " y2="153.75" x2="80.87383" y1="149.25" x1="79.18633" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_1"/>
          <line transform="rotate(23 94.90619659423828,192.68751525878906) " y2="194.93752" x2="95.74995" y1="190.43752" x1="94.06245" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_2"/>
          <line stroke=${color} transform="rotate(18 94.06484222412105,165.40614318847656) " y2="167.65614" x2="94.9086" y1="163.15614" x1="93.2211" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_11"/>
          <line stroke=${color} transform="rotate(18 94.06482696533197,165.4061431884766) " y2="167.65614" x2="94.90859" y1="163.15614" x1="93.22109" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_16"/>
          <line transform="rotate(23 107.84375762939467,154.99999999999997) " y2="157.25" x2="108.68751" y1="152.75" x1="107.00001" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_19"/>
          <line transform="rotate(23 113.1851654052735,182.56250000000003) " y2="184.8125" x2="114.02891" y1="180.3125" x1="112.34141" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_20"/>
          <line transform="rotate(23 88.71755981445312,139.37499999999997) " y2="141.625" x2="89.56132" y1="137.125" x1="87.87382" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_21"/>
          <line stroke=${color} transform="rotate(18 113.50350952148435,169.5) " y2="171.75" x2="114.34727" y1="167.25" x1="112.65977" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_24"/>
          <line stroke=${color} transform="rotate(18 113.50350952148435,169.5) " y2="171.75" x2="114.34726" y1="167.25" x1="112.65976" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_25"/>
          <line transform="rotate(23 72.7175903320313,168.375) " y2="170.625" x2="73.56132" y1="166.125" x1="71.87382" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none" id="svg_26"/>
          <line id="svg_27" transform="rotate(23 152.79330444335935,187.15626525878906) " y2="189.40626" x2="153.63705" y1="184.90626" x1="151.94955" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_28" stroke=${color} transform="rotate(18 151.95193481445318,159.87487792968741) " y2="162.12488" x2="152.7957" y1="157.62488" x1="151.1082" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_30" stroke=${color} transform="rotate(18 151.95193481445318,159.87487792968741) " y2="162.12488" x2="152.79569" y1="157.62488" x1="151.10819" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_31" transform="rotate(23 165.73086547851557,149.46875) " y2="151.71874" x2="166.57461" y1="147.21874" x1="164.88711" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_32" transform="rotate(23 171.07226562499983,177.03125) " y2="179.28124" x2="171.91601" y1="174.78124" x1="170.22851" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_33" transform="rotate(23 146.6046752929687,133.84375000000003) " y2="136.09374" x2="147.44842" y1="131.59374" x1="145.76092" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_34" stroke=${color} transform="rotate(18 171.39059448242173,163.96873474121097) " y2="166.21874" x2="172.23437" y1="161.71874" x1="170.54687" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_35" stroke=${color} transform="rotate(18 171.39059448242173,163.96873474121097) " y2="166.21874" x2="172.23436" y1="161.71874" x1="170.54686" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_36" stroke=${color} transform="rotate(18 137.9171447753905,145.96875000000003) " y2="148.21874" x2="138.76093" y1="143.71874" x1="137.07343" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_39" transform="rotate(23 130.60470581054688,162.84375) " y2="165.09374" x2="131.44842" y1="160.59374" x1="129.76092" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_40" stroke=${color} transform="rotate(18 137.9171447753905,145.96875000000003) " y2="148.21874" x2="138.76093" y1="143.71874" x1="137.07343" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_41" transform="rotate(23 152.79330444335935,187.15626525878906) " y2="189.40626" x2="153.63705" y1="184.90626" x1="151.94955" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_42" stroke=${color} transform="rotate(18 151.95193481445318,159.87487792968741) " y2="162.12488" x2="152.7957" y1="157.62488" x1="151.1082" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_43" stroke=${color} transform="rotate(18 151.95193481445318,159.87487792968741) " y2="162.12488" x2="152.79569" y1="157.62488" x1="151.10819" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_44" transform="rotate(23 165.73086547851557,149.46875) " y2="151.71874" x2="166.57461" y1="147.21874" x1="164.88711" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_45" transform="rotate(23 171.07226562499983,177.03125) " y2="179.28124" x2="171.91601" y1="174.78124" x1="170.22851" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_46" transform="rotate(23 146.6046752929687,133.84375000000003) " y2="136.09374" x2="147.44842" y1="131.59374" x1="145.76092" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
          <line id="svg_48" stroke=${color} transform="rotate(18 171.39059448242173,163.96873474121097) " y2="166.21874" x2="172.23437" y1="161.71874" x1="170.54687" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_49" stroke=${color} transform="rotate(18 171.39059448242173,163.96873474121097) " y2="166.21874" x2="172.23436" y1="161.71874" x1="170.54686" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
          <line id="svg_51" transform="rotate(23 130.60470581054688,162.84375) " y2="165.09374" x2="131.44842" y1="160.59374" x1="129.76092" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke=${color} fill="none"/>
        </g>
      </g>
      <g display="inline">
        <title>cloud2</title>
        <ellipse id="svg_8" ry="43.5" rx="80" cy="95" cx="146.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 146.50000000000014,95.00000000000007) "/>
      </g>
      <g>
        <title>cloud</title>
        <ellipse id="svg_6" ry="59" rx="114" cy="63" cx="116.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 116.4999999999998,63.0000000000001) "/>
      </g>
    </svg>`;
  };

  const storm = 
    `<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>rain</title>
        <line id="svg_29" stroke-opacity="0.3" fill-opacity="0" y2="186.5" x2="79" y1="124.5" x1="127" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_31" y2="173" x2="106" y1="143" x1="128" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_33" y2="193.5" x2="148" y1="163.5" x1="170" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_40" y2="178" x2="186.25" y1="148" x1="208.25" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_45" stroke-opacity="0.3" fill-opacity="0" y2="194.25" x2="44.75" y1="132.25" x1="92.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_49" y2="144.25" x2="19" y1="114.25" x1="41" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_7" fill-opacity="0" y2="222.75" x2="108.5" y1="160.75" x1="156.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_1" fill-opacity="0" y2="203.5" x2="101.375" y1="141.5" x1="149.375" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_3" y2="174" x2="94.375" y1="144" x1="116.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_17" y2="151.25" x2="45.375" y1="121.25" x1="67.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_20" y2="173" x2="67.375" y1="143" x1="89.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line stroke="#212A29" id="svg_22" fill-opacity="0" y2="191" x2="85.375" y1="153" x1="113.375" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none"/>
        <line id="svg_24" fill-opacity="0" y2="181" x2="31.375" y1="119" x1="79.375" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_41" y2="201" x2="134.625" y1="171" x1="156.625" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line id="svg_53" y2="176" x2="109.375" y1="146" x1="131.375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none"/>
        <line y2="185.875" x2="69.25" y1="155.875" x1="91.25" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_25"/>
        <line y2="192.875" x2="99.625" y1="162.875" x1="121.625" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_57"/>
        <line y2="170.625" x2="84.625" y1="140.625" x1="106.625" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_61"/>
        <line y2="181.75" x2="129.9375" y1="151.75" x1="151.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_66"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="180.5" x2="139.0625" y1="118.5" x1="187.0625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_72"/>
        <line y2="202.75" x2="29.9375" y1="172.75" x1="51.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_78"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="170.5" x2="14.6875" y1="108.5" x1="62.6875" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_79"/>
        <line y2="158" x2="59.9375" y1="128" x1="81.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_80"/>
        <line y2="184.5" x2="38.9375" y1="154.5" x1="60.9375" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_81"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="186" x2="9.0625" y1="124" x1="57.0625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_85"/>
        <line y2="144" x2="29.3125" y1="114" x1="51.3125" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_87"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="188.625" x2="163.1875" y1="126.625" x1="211.1875" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_23"/>
        <line fill-opacity="0" y2="135.625" x2="10.5625" y1="73.625" x1="58.5625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_51"/>
        <line stroke="#212A29" fill-opacity="0" y2="179.125" x2="165.5625" y1="141.125" x1="193.5625" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_76"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="183.125" x2="164.25" y1="121.125" x1="212.25" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_92"/>
        <line fill-opacity="0" y2="188.5" x2="11" y1="126.5" x1="59" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_2"/>
        <line fill-opacity="0" y2="226.5" x2="29" y1="164.5" x1="77" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_4"/>
        <line fill-opacity="0" y2="179.5" x2="-13" y1="117.5" x1="35" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_5"/>
        <line stroke="#212A29" fill-opacity="0" y2="217.5" x2="71" y1="179.5" x1="99" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="none" id="svg_9"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="236.5" x2="42" y1="174.5" x1="90" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_10"/>
        <line y2="116.5" x2="9" y1="86.5" x1="31" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_12"/>
        <line fill-opacity="0" y2="133" x2="-15" y1="71" x1="33" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_13"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="143" x2="-2" y1="81" x1="46" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_14"/>
        <line stroke-opacity="0.3" fill-opacity="0" y2="124" x2="-42" y1="62" x1="6" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#212A29" fill="none" id="svg_15"/>
      </g>
      <g>
      <title>lighting</title>
      <g stroke="null" id="svg_27" transform="rotate(16.262859344482422 70.43862152099591,151.41197204589847) " filter="url(#svg_20_blur)">
        <polygon stroke="#ffff00" id="svg_28" fill="#ffff00" points="51.95901679992676,190.4657440185547 65.22241592407227,156.4188995361328 48.141035079956055,156.4188995361328 64.45319366455078,112.35816955566406 90.65019989013672,112.35816955566406 75.49205017089844,142.39955139160156 92.02767181396484,142.39955139160156 52.01011085510254,190.4657440185547 " stroke-width="0"/>
        <path stroke="#ffff00" id="svg_30" fill="#ffff00" d="m89.06991,113.35953l-13.67265,27.09534l-1.48548,2.94607l3.15854,0l12.86166,0l-34.98303,42.0199l10.61066,-27.23753l1.07623,-2.76581l-2.82887,0l-14.27706,0l15.56928,-42.05795l23.97066,0m3.15857,-2.00276l-28.42146,0l-17.0529,46.06347l17.0529,0l-13.26336,34.04691l1.89477,0l41.68483,-50.06899l-17.0529,0l15.15813,-30.04139l0,0l0,0l0,0z" stroke-width="0"/>
      </g>
      </g>
      <g display="inline">
        <title>cloud2</title>
        <ellipse id="svg_8" ry="43.5" rx="80" cy="95" cx="146.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#212A29" stroke="#000000" transform="rotate(5 123.99999999999977,52.99999999999994) "/>
      </g>
      <g>
        <title>cloud</title>
        <ellipse id="svg_6" ry="59" rx="114" cy="63" cx="116.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#212A29" stroke="#000000" transform="rotate(5 116.4999999999998,63.0000000000001) "/>
      </g>
      <defs>
        <filter id="svg_20_blur">
          <feGaussianBlur stdDeviation="3"/>
        </filter>
      </defs>
    </svg>`;

  const snow = 
    `<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>snow</title>
        <polygon id="svg_19" fill="#dedddf" points="129.13770294189453,188 125.06884765625,195.04745483398438 116.93115234375,195.04745483398438 112.86229705810547,188 116.93115234375,180.95254516601562 125.06884765625,180.95254516601562 129.13770294189453,188 " stroke="#000000" stroke-width="0" fill-opacity="0.7" transform="rotate(45 121.00000000000009,187.99999999999997) "/>
        <polygon fill="#dedddf" points="134.16282653808594,215.5 131.33140563964844,220.0725860595703 125.66859436035156,220.0725860595703 122.83717346191406,215.5 125.66859436035156,210.9274139404297 131.33140563964844,210.9274139404297 134.16282653808594,215.5 " stroke-width="0" transform="rotate(45 128.50000000000014,215.49999999999991) " id="svg_20" stroke="#000000"/>
        <polygon fill="#dedddf" points="85.662841796875,205.5 82.8314208984375,210.0725860595703 77.1685791015625,210.0725860595703 74.337158203125,205.5 77.1685791015625,200.9274139404297 82.8314208984375,200.9274139404297 85.662841796875,205.5 " stroke-width="0" transform="rotate(45 80.0000000000001,205.49999999999997) " stroke="#000000" id="svg_21"/>
        <polygon fill="#f1eff2" points="169.1376953125,182.5 165.06884765625,189.54745483398438 156.93115234375,189.54745483398438 152.8623046875,182.5 156.93115234375,175.45254516601562 165.06884765625,175.45254516601562 169.1376953125,182.5 " stroke="#000000" stroke-width="0" transform="rotate(45 161.00000000000009,182.49999999999997) " id="svg_27"/>
        <polygon fill="#dedddf" points="202.662841796875,201.5 199.8314208984375,206.07257080078125 194.1685791015625,206.07257080078125 191.337158203125,201.5 194.1685791015625,196.9274139404297 199.8314208984375,196.9274139404297 202.662841796875,201.5 " stroke-width="0" transform="rotate(45 197.00000000000009,201.49999999999997) " stroke="#000000" id="svg_30"/>
        <polygon fill="#ffffff" points="67.662841796875,189.5 64.8314208984375,194.0725860595703 59.1685791015625,194.0725860595703 56.337158203125,189.5 59.1685791015625,184.9274139404297 64.8314208984375,184.9274139404297 67.662841796875,189.5 " stroke-width="0" transform="rotate(45 62.000000000000064,189.49999999999994) " stroke="#000000" id="svg_31"/>
        <polygon fill="#dedddf" points="25.662841796875,187.5 22.8314208984375,192.0725860595703 17.1685791015625,192.0725860595703 14.337158203125,187.5 17.1685791015625,182.9274139404297 22.8314208984375,182.9274139404297 25.662841796875,187.5 " stroke-width="0" fill-opacity="0.6" transform="rotate(45 20.0000000000001,187.49999999999997) " stroke="#000000" id="svg_32"/>
        <polygon fill="#dedddf" points="141.662841796875,156.5 138.8314208984375,161.0725860595703 133.1685791015625,161.0725860595703 130.337158203125,156.5 133.1685791015625,151.9274139404297 138.8314208984375,151.9274139404297 141.662841796875,156.5 " stroke-width="0" transform="rotate(45 136.00000000000009,156.49999999999997) " stroke="#000000" id="svg_33"/>
        <polygon fill="#ffffff" points="181.14849853515625,218.71875 179.80859375,220.90484619140625 177.12890625,220.90484619140625 175.78900146484375,218.71875 177.12890625,216.53265380859375 179.80859375,216.53265380859375 181.14849853515625,218.71875 " stroke-width="0" transform="rotate(45 178.46875000000014,218.71874999999997) " id="svg_34" stroke="null"/>
        <polygon fill="#ffffff" points="17.10162353515625,165.8359375 15.76171875,168.02203369140625 13.08203125,168.02203369140625 11.74212646484375,165.8359375 13.08203125,163.64984130859375 15.76171875,163.64984130859375 17.10162353515625,165.8359375 " stroke-width="0" transform="rotate(45 14.42187500000014,165.83593749999994) " stroke="null" id="svg_35"/>
        <polygon fill="#ffffff" points="208.39849853515625,158.0703125 207.05859375,160.25640869140625 204.37890625,160.25640869140625 203.03900146484375,158.0703125 204.37890625,155.88421630859375 207.05859375,155.88421630859375 208.39849853515625,158.0703125 " stroke-width="0" transform="rotate(45 205.71875,158.07031249999997) " stroke="null" id="svg_36"/>
        <polygon fill="#ffffff" points="117.42974853515625,166.0234375 116.08984375,168.20953369140625 113.41015625,168.20953369140625 112.07025146484375,166.0234375 113.41015625,163.83734130859375 116.08984375,163.83734130859375 117.42974853515625,166.0234375 " stroke-width="0" transform="rotate(45 114.75000000000006,166.02343749999997) " stroke="null" id="svg_37"/>
        <polygon fill="#ffffff" points="31.03912353515625,118.4140625 29.69921875,120.60015869140625 27.01953125,120.60015869140625 25.67962646484375,118.4140625 27.01953125,116.22796630859375 29.69921875,116.22796630859375 31.03912353515625,118.4140625 " stroke-width="0" transform="rotate(45 28.35937500000004,118.41406249999999) " stroke="null" id="svg_38"/>
        <polygon fill="#ffffff" points="196.662841796875,170.5 193.8314208984375,175.0725860595703 188.1685791015625,175.0725860595703 185.337158203125,170.5 188.1685791015625,165.9274139404297 193.8314208984375,165.9274139404297 196.662841796875,170.5 " stroke-width="0" transform="rotate(45 191,170.5) " stroke="#000000" id="svg_1"/>
        <polygon fill="#ffffff" points="208.39849853515625,158.0703125 207.05859375,160.25640869140625 204.37890625,160.25640869140625 203.03900146484375,158.0703125 204.37890625,155.88421630859375 207.05859375,155.88421630859375 208.39849853515625,158.0703125 " stroke-width="0" transform="rotate(45 205.71875,158.07031249999997) " stroke="null" id="svg_2"/>
        <polygon fill="#ffffff" points="181.14849853515625,218.71875 179.80859375,220.90484619140625 177.12890625,220.90484619140625 175.78900146484375,218.71875 177.12890625,216.53265380859375 179.80859375,216.53265380859375 181.14849853515625,218.71875 " stroke-width="0" transform="rotate(45 178.46875000000014,218.71874999999997) " stroke="null" id="svg_3"/>
        <polygon fill="#f1eff2" points="169.1376953125,182.5 165.06884765625,189.54745483398438 156.93115234375,189.54745483398438 152.8623046875,182.5 156.93115234375,175.45254516601562 165.06884765625,175.45254516601562 169.1376953125,182.5 " stroke="#000000" stroke-width="0" transform="rotate(45 161.00000000000009,182.49999999999997) " id="svg_4"/>
        <polygon fill="#dedddf" points="202.662841796875,201.5 199.8314208984375,206.07257080078125 194.1685791015625,206.07257080078125 191.337158203125,201.5 194.1685791015625,196.9274139404297 199.8314208984375,196.9274139404297 202.662841796875,201.5 " stroke-width="0" transform="rotate(45 197.00000000000009,201.49999999999997) " stroke="#000000" id="svg_5"/>
        <polygon fill="#ffffff" points="196.662841796875,170.5 193.8314208984375,175.0725860595703 188.1685791015625,175.0725860595703 185.337158203125,170.5 188.1685791015625,165.9274139404297 193.8314208984375,165.9274139404297 196.662841796875,170.5 " stroke-width="0" transform="rotate(45 197.00000000000009,201.49999999999997) " stroke="#000000" id="svg_7"/>
        <polygon id="svg_9" fill="#f1eff2" points="46.611358642578125,147.76173400878906 42.542510986328125,154.80918884277344 34.404815673828125,154.80918884277344 30.335968017578125,147.76173400878906 34.404815673828125,140.7142791748047 42.542510986328125,140.7142791748047 46.611358642578125,147.76173400878906 " stroke="#000000" stroke-width="0" transform="rotate(45 38.473663330078125,147.76173400878906) "/>
        <polygon id="svg_10" fill="#dedddf" points="79.13650512695312,165.76173400878906 76.30508422851562,170.3343048095703 70.64224243164062,170.3343048095703 67.81082153320312,165.76173400878906 70.64224243164062,161.18914794921875 76.30508422851562,161.18914794921875 79.13650512695312,165.76173400878906 " stroke-width="0" transform="rotate(45 73.47366333007818,165.761734008789) " stroke="#000000"/>
        <polygon id="svg_12" fill="#ffffff" points="74.13650512695312,135.76173400878906 71.30508422851562,140.33432006835938 65.64224243164062,140.33432006835938 62.810821533203125,135.76173400878906 65.64224243164062,131.18914794921875 71.30508422851562,131.18914794921875 74.13650512695312,135.76173400878906 " stroke-width="0" transform="rotate(45 68.47366333007812,135.76173400878906) " stroke="#000000"/>
        <polygon id="svg_13" fill="#ffffff" points="43.622161865234375,180.98048400878906 42.282257080078125,183.1665802001953 39.602569580078125,183.1665802001953 38.262664794921875,180.98048400878906 39.602569580078125,178.7943878173828 42.282257080078125,178.7943878173828 43.622161865234375,180.98048400878906 " stroke-width="0" transform="rotate(45 40.94241333007819,180.98048400878903) " stroke="null"/>
        <polygon id="svg_14" fill="#f1eff2" points="46.611358642578125,147.76173400878906 42.542510986328125,154.80918884277344 34.404815673828125,154.80918884277344 30.335968017578125,147.76173400878906 34.404815673828125,140.7142791748047 42.542510986328125,140.7142791748047 46.611358642578125,147.76173400878906 " stroke="#000000" stroke-width="0" transform="rotate(45 38.473663330078125,147.76173400878906) "/>
        <polygon id="svg_15" fill="#dedddf" points="16.136505126953125,136.76173400878906 13.305084228515625,141.3343048095703 7.642242431640625,141.3343048095703 4.810821533203125,136.76173400878906 7.642242431640625,132.18914794921875 13.305084228515625,132.18914794921875 16.136505126953125,136.76173400878906 " stroke-width="0" transform="rotate(45 10.473663330078132,136.76171875) " stroke="#000000"/>
        <polygon id="svg_16" fill="#ffffff" points="74.13650512695312,135.76173400878906 71.30508422851562,140.33432006835938 65.64224243164062,140.33432006835938 62.810821533203125,135.76173400878906 65.64224243164062,131.18914794921875 71.30508422851562,131.18914794921875 74.13650512695312,135.76173400878906 " stroke-width="0" transform="rotate(45 74.47366333007815,166.76173400878906) " stroke="#000000"/>
        <polygon fill="#dedddf" points="22.662841796875,99.50000762939453 19.8314208984375,104.07257843017578 14.1685791015625,104.07257843017578 11.337158203125,99.50000762939453 14.1685791015625,94.92742156982422 19.8314208984375,94.92742156982422 22.662841796875,99.50000762939453 " stroke-width="0" transform="rotate(45 17.00000000000006,99.50000762939452) " stroke="#000000" id="svg_17"/>
        <polygon fill="#dedddf" points="22.662841796875,99.50000762939453 19.8314208984375,104.07257843017578 14.1685791015625,104.07257843017578 11.337158203125,99.50000762939453 14.1685791015625,94.92742156982422 19.8314208984375,94.92742156982422 22.662841796875,99.50000762939453 " stroke-width="0" transform="rotate(45 17.00000000000006,99.50000762939452) " stroke="#000000" id="svg_18"/>
      </g>
      <g display="inline">
        <title>cloud2</title>
        <ellipse id="svg_8" ry="43.5" rx="80" cy="95" cx="146.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#aad4ff" stroke="#000000" transform="rotate(5 146.50000000000014,95.00000000000007) "/>
      </g>
      <g>
        <title>cloud</title>
        <ellipse id="svg_6" ry="59" rx="114" cy="63" cx="116.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#aad4ff" stroke="#000000" transform="rotate(5 116.4999999999998,63.0000000000001) "/>
      </g>
    </svg>`;

  const mist = (color) => {
    return `
    <svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>mist</title>
        <ellipse fill="#e5e5e5" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="112.5" cy="179" id="svg_1" rx="111.5" ry="6" stroke="#e5e5e5"/>
        <ellipse stroke="#e5e5e5" fill="#e5e5e5" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="117.5" cy="196" rx="98.5" ry="4.5" id="svg_10"/>
        <ellipse fill="#e5e5e5" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="108.5" cy="160.5" rx="97.5" ry="6" id="svg_12" stroke="#e5e5e5"/>
        <ellipse fill="#e5e5e5" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="116" cy="140.5" rx="90" ry="6" id="svg_13" stroke="#e5e5e5"/>
    </g>
      <g display="inline">
        <title>cloud2</title>
        <ellipse id="svg_8" ry="43.5" rx="80" cy="95" cx="146.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 146.50000000000014,95.00000000000007) "/>
      </g>
      <g>
        <title>cloud</title>
        <ellipse id="svg_6" ry="59" rx="114" cy="63" cx="116.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill=${color} stroke="#000000" transform="rotate(5 116.4999999999998,63.0000000000001) "/>
      </g>
    </svg>`;
  };
  
  const weatherIcons = {
    '01d': sun,
    '01n': moon,
    '02d': fewCloudsSun,
    '02n': fewCloudsMoon,
    '03d': cloudySun,
    '03n': cloudyMoon,
    '04d': clouds('#d4e6f9'),
    '04n': clouds('#495073'),
    '09d': rain('#d4e6f9'),
    '09n': rain('#495073'),
    '10d': lightRain('#d4e6f9'),
    '10n': lightRain('#495073'),
    '11d': storm,
    '11n': storm,
    '13d': snow,
    '13n': snow,
    '50d': mist('#d4e6f9'),
    '50n': mist('#495073')
  };

  weatherDataIcon.then(function(apiOutput) {
    const icon = apiOutput.weather[0].icon;
    const currentTemp = apiOutput.main.temp;
    const weatherIconElement = document.querySelector('.weather__icon');

    weatherIconElement.innerHTML = weatherIcons[icon];
    console.log(`Icon symbol: ${icon}`);

    const bgElements = document.querySelectorAll('.bg-color');
    bgElements.forEach((element) => {
      const nightly = '#01051C';
      const daily = '#579CE9';
      const stormy = '#475B5A';
      const sunny = '#fcad54';

      if (icon === '01d' && currentTemp > 30) { 
        element.style.backgroundColor = sunny;
      } else if (['01d', '02d', '03d', '04d', '09d', '10d', '13d', '50d'].includes(icon)) {
        element.style.backgroundColor = daily;
      } else if (['01n', '02n', '03n', '04n', '09n', '10n', '13n', '50n'].includes(icon)) {
        element.style.backgroundColor = nightly;
      } else if (['11d', '11n'].includes(icon)) {
        element.style.backgroundColor = stormy;
      } 
    });
  });
};

// WEATHER LOGIC
(function getCurrentDate() {
  //const WEEK_DAYS = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`];
  const WEEK_DAYS_SHORT = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
  const MONTHS = [`jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, `dec`];

  const addZero = (current) => {
    return current = (current < 10) ? '0'+current : current;
  };

  const today = new Date();
  const currentDay = WEEK_DAYS_SHORT[today.getDay()-1]; //monday is 0!
  const currentDate = today.getDate();
  const currentMonth = MONTHS[today.getMonth()];
  const currentYear = today.getFullYear();

  const currentHH = today.getHours();
  const currentMM = today.getMinutes();
  const currentTime = `${addZero(currentHH)} : ${addZero(currentMM)}`;

  document.querySelector('.weather__time').innerHTML = currentTime;
  document.querySelector('.weather__week-day').innerHTML = `${currentDay}, `;
  document.querySelector('.weather__full-date').innerHTML = `${currentMonth} ${currentDate}`;
}());

const assignTemp = (nodeEle, tempsArr) => {
  nodeEle.forEach((el, index) => {
    el.innerHTML = `${tempsArr[index]}°`;
  });
};

const assignDay = (nodeEle) => {
  //const WEEK_DAYS_SHORT = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
  const WEEK_DAYS = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`];
  const today = new Date().getDay();
  
  nodeEle.forEach((el, index) => {
    i = ((index + today) % 7);
    el.innerHTML = WEEK_DAYS[i];
  });
};

const convertUTC = (date) => {
  const today = new Date(date * 1000);
 
  //set the options to get rid of the seconds
  return today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
};

const filterForecast = (output, today, iteration) => {
  return output.list.filter((li) => {
    const filteredDay = new Date(li.dt_txt).getDay();
    const forecastedDay = ((today + iteration) % 7);
    //const filteredTime = new Date(li.dt_txt).getHours();

    return ((filteredDay === forecastedDay));
    // && (filteredTime === 6 || filteredTime === 12 || filteredTime === 18));
  });
};

const getAverageTemp = (arr, h1, h2, h3) => {
  const avgTempArr = [];

  arr.forEach((el) => {
    const tempSum = el.filter((ele) => {
      const filteredTime = new Date(ele.dt_txt).getHours();
      return (filteredTime === h1 || filteredTime === h2 || filteredTime === h3);
    }).reduce((sum, elem) => {
      return (sum + elem.main.temp);
    },0);

    avgTempArr.push((tempSum/3).toFixed());
    //return ((tempSum/3).toFixed(1));
  });

  return avgTempArr;
};

const getAndAssignForecastDesc = (arr, timeOfTheDay) => {
  const forecastDescArr = [];
  const nodeEle = document.querySelectorAll('.forecast__desc'); 

  arr.forEach((el) => {
    //check if there is forecast data for all days 
    if (Object.keys(el).length !== 0) {
      //if there is no forecast data for 12 noon, take the previous temperature reading (at 9 am)//if there is no forecast data for 12 noon, take the previous temperature reading (at 9 am)
      if (el[timeOfTheDay]) {
        forecastDescArr.push(el[timeOfTheDay].weather[0].description);
      } else {
        forecastDescArr.push(el[timeOfTheDay-1].weather[0].description);
      }
    } else {
      forecastDescArr.push('No data');
    }
  });

  nodeEle.forEach((el, index) => {
    el.innerHTML = `${forecastDescArr[index]}`;
  });
};

const makeClassInactive = () => {
  //let welcomeScreen = document.getElementsByClassName('search-menu-wrapper');
  //welcomeScreen[0].className += " inactive";
  let welcomeScreen = document.querySelector('.search-menu-wrapper');
  welcomeScreen.classList.add('inactive');
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    document.getElementById('submitButton').addEventListener('click', makeClassInactive);
    return response.json()
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error
  }
};

const getWeather = (urlApi) => {
  const currentCity = document.querySelector('.weather__info--city');
  const currentTemp = document.querySelector('.weather__info--temp');
  const currentDesc = document.querySelector('.weather__info--desc');
  const sunrise = document.querySelector('.details__sunrise');
  const sunset = document.querySelector('.details__sunset');
  const humidity = document.querySelector('.details__humidity');
  const pressure = document.querySelector('.details__pressure');
  
  const storedWeatherData = fetch(urlApi)
    .then(checkStatus)
    .then((data) => {
      console.log(`Connected with Weather API for current weather.`);

      currentCity.innerHTML = data.name;
      currentTemp.innerHTML = `${data.main.temp.toFixed()}<span class='degree-symbol'>°</span>`;
      currentDesc.innerHTML = data.weather[0].description;
      sunrise.innerHTML = convertUTC(data.sys.sunrise);
      sunset.innerHTML = convertUTC(data.sys.sunset);
      humidity.innerHTML = data.main.humidity;
      pressure.innerHTML = data.main.pressure.toFixed();

      return data;
    })
    .catch((error) => {
      const errorOutputs = document.getElementsByClassName("form__error");
      errorOutputs[1].classList.add('active');
      errorOutputs[1].innerHTML = 'Sorry, no position available';
      console.log('Sorry, no position available.');

      document.getElementById('submitButton').removeEventListener('click', makeClassInactive);
    });

  getWeatherSVGIcon(storedWeatherData);
};

const getWeatherForecast = (urlApi) => {
  const nameOfTheDays = document.querySelectorAll('.forecast__day');
  const morningTempEle = document.querySelectorAll('.forecast__temp--morning');
  const dayTempEle = document.querySelectorAll('.forecast__temp--day');
  const eveningTempEle = document.querySelectorAll('.forecast__temp--evening');
  const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;

  const storedForecastData = fetch(urlApi)
    .then(checkStatus)
    .then((data) => {
      console.log(`Connected with Weather API for 5day forecast.`);

      let morningTemperatures;
      let dayTemperatures;
      let eveningTemperatures;
      const today = new Date().getDay();
      const forecastDays = [];
      
      forecastDays[0] = filterForecast(data, today, 1);
      forecastDays[1] = filterForecast(data, today, 2);
      forecastDays[2] = filterForecast(data, today, 3);
      forecastDays[3] = filterForecast(data, today, 4);
      forecastDays[4] = filterForecast(data, today, 5);

      // systematic temperature recording
      morningTemperatures = getAverageTemp(forecastDays, 3, 6, 9);
      dayTemperatures = getAverageTemp(forecastDays, 9, 12, 15);
      eveningTemperatures = getAverageTemp(forecastDays, 18, 21, 0);

      // number '4' in the below function means 12 noon
      getAndAssignForecastDesc(forecastDays, 4);

      assignTemp(morningTempEle, morningTemperatures);
      assignTemp(dayTempEle, dayTemperatures);
      assignTemp(eveningTempEle, eveningTemperatures);

      assignDay(nameOfTheDays);
    })
    .catch(error => {
      const errorOutputs = document.getElementsByClassName("form__error");
      errorOutputs[1].classList.add('active');
      errorOutputs[1].innerHTML = 'Sorry, no position available';
      console.log('Sorry, no position available.');

      document.getElementById('submitButton').removeEventListener('click', makeClassInactive);
    });
};

const getCurrentLocation = () => {
  const errorOutputs = document.getElementsByClassName("form__error");
  const geo = navigator.geolocation;

  if (geo) {
    console.log(`Geolocation services are available`);

    geo.getCurrentPosition((location) => {
      const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myWeatherApi}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${myWeatherApi}`;

      //codeLatLng(lat, lon);
      getWeather(weatherUrl);
      getWeatherForecast(forecastUrl);

      console.log(`Your location: latitude is ${lat}°, longitude is ${lon}°`);
    }, () => {
      errorOutputs[0].innerHTML = "Unable to retrieve your location";
      errorOutputs[0].classList.add('active');
      console.log(`Unable to retrieve your location`);
    });
  } else {
    errorOutputs[0].innerHTML = "Geolocation is not supported by your browser";
    errorOutputs[0].classList.add('active');
    console.log(`Geolocation is not supported by your browser`);
  }
};

const keypressEnter = () => {
  document.addEventListener('keypress', (event) => {
    if(event.key !== "Enter") return;
  
    document.getElementById('submitButton').click();
    event.preventDefault();
  });
};

document.querySelector('#location').addEventListener('change', () => {
  const errorOutputs = document.getElementsByClassName("form__error");
  getCurrentLocation();
  keypressEnter();

  // clearing
  errorOutputs[1].classList.remove('active');
  document.getElementById('cityName').value = '';
});

document.querySelector('#destination').addEventListener('change', () => {
  const errorOutputs = document.getElementsByClassName("form__error");
  errorOutputs[0].classList.remove('active'); 

  document.getElementById('submitButton').removeEventListener('click', makeClassInactive);
});

document.querySelector('#cityName').addEventListener('change', () => {
  let cityName = document.getElementById('cityName').value;
  const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${myWeatherApi}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${myWeatherApi}`;

  document.querySelector('.weather__info--city').innerHTML = cityName;
  
  getWeather(weatherUrl);
  getWeatherForecast(forecastUrl);
  keypressEnter();
});

document.querySelector('.weather__search-button').addEventListener('click', () => {
  const errorOutputs = document.getElementsByClassName("form__error");
  const welcomeScreenChanged = document.querySelector('.search-menu-wrapper');
  const destinationElement = document.getElementById("destination");
  const locationElement = document.getElementById("location");

  welcomeScreenChanged.classList.remove('inactive');

  //clearing
  destinationElement.checked = false;
  locationElement.checked = false;

  errorOutputs[1].classList.remove('active');  
  document.getElementById('cityName').value = '';
});

/////////////////
/// PRELOADER ///
window.addEventListener('load', () => {
  const preloaderEle = document.querySelector('.preloader');
  preloaderEle.classList.add('preloader__hiding');

  preloaderEle.addEventListener('transitionend', function() {
    this.classList.remove('preloader__hiding');
    this.classList.add("preloader__hidden");
  });
});