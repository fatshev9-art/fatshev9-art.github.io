const I = {
  check: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"></path></svg>
  ),
  checkCircle: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.2 2.4 2.4 4.6-5.2"></path></svg>
  ),
  phone: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  clock: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
  ),
  ruler: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21.3 8.7 15.3 2.7a1 1 0 0 0-1.4 0L2.7 13.9a1 1 0 0 0 0 1.4l6 6a1 1 0 0 0 1.4 0L21.3 10a1 1 0 0 0 0-1.4Z"></path><path d="m7.5 10.5 2 2"></path><path d="m10.5 7.5 2 2"></path><path d="m13.5 4.5 2 2"></path><path d="m4.5 13.5 2 2"></path></svg>
  ),
  doc: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fillOpacity="0.16"></path>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M9 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
      <path d="M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
    </svg>
  ),
  shield: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z"></path><path d="m9 11.5 2.2 2.2L15.5 9"></path></svg>
  ),
  team: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity="0.16"></circle>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2z" fill="currentColor" fillOpacity="0.16"></path>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  ),
  house: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor" fillOpacity="0.16"></path>
      <path d="M9 22V12h6v10" fill="currentColor" fillOpacity="0.32"></path>
      <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  ),
  broom: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m13 11 8-8"></path><path d="M5.5 21c4 0 7.5-3.5 7.5-7.5L8.5 9C4.5 9 3 12.5 3 16.5c0 1.5-.5 3-1 4.5 1.2 0 2.3 0 3.5 0z"></path></svg>
  ),
  wallet: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
  ),
  window: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="3" width="16" height="18" rx="1.5"></rect><path d="M12 3v18"></path><path d="M4 12h16"></path></svg>
  ),
  balcony: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 3h16v9H4z"></path><path d="M4 12v9"></path><path d="M8 12v9"></path><path d="M12 12v9"></path><path d="M16 12v9"></path><path d="M20 12v9"></path><path d="M3 21h18"></path></svg>
  ),
  ceiling: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M2.5 4.5h19v4.6a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2z" fill="currentColor" fillOpacity="0.16"></path>
      <path d="M2.5 4.5h19v4.6a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"></path>
      <circle cx="7.4" cy="7.8" r="1.05" fill="currentColor"></circle>
      <circle cx="12" cy="7.8" r="1.05" fill="currentColor"></circle>
      <circle cx="16.6" cy="7.8" r="1.05" fill="currentColor"></circle>
      <path d="M7.4 14.4v1.9M12 14.4v3.1M16.6 14.4v1.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity=".5"></path>
    </svg>
  ),
  door: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"></path><path d="M3 21h18"></path><circle cx="14.6" cy="12.5" r="1"></circle></svg>
  ),
  doorEntry: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6 21V4.6A1.6 1.6 0 0 1 7.6 3h8.8A1.6 1.6 0 0 1 18 4.6V21z" fill="currentColor" fillOpacity="0.16"></path>
      <path d="M6 21V4.6A1.6 1.6 0 0 1 7.6 3h8.8A1.6 1.6 0 0 1 18 4.6V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
      <circle cx="12" cy="7" r="1.1" fill="currentColor"></circle>
      <path d="M13 12.2h2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
      <circle cx="14.05" cy="15.4" r="1" fill="currentColor"></circle>
    </svg>
  ),
  doorInterior: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6 21V4.6A1.6 1.6 0 0 1 7.6 3h8.8A1.6 1.6 0 0 1 18 4.6V21z" fill="currentColor" fillOpacity="0.16"></path>
      <path d="M6 21V4.6A1.6 1.6 0 0 1 7.6 3h8.8A1.6 1.6 0 0 1 18 4.6V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
      <rect x="8.5" y="5.6" width="4.3" height="4.6" rx="0.8" stroke="currentColor" strokeWidth="1.5" opacity=".55"></rect>
      <rect x="8.5" y="12.6" width="4.3" height="5.8" rx="0.8" stroke="currentColor" strokeWidth="1.5" opacity=".55"></rect>
      <circle cx="15.3" cy="11.5" r="0.9" fill="currentColor"></circle>
    </svg>
  ),
  loggia: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M4 13.4h16V21H4z" fill="currentColor" fillOpacity="0.16"></path>
      <path d="M4 21V4.2a1.2 1.2 0 0 1 1.2-1.2h13.6a1.2 1.2 0 0 1 1.2 1.2V21M4 13.4h16M9.33 3v10.4M14.67 3v10.4M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  ),
  dressing: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="4.2" y="3" width="15.6" height="18" rx="1.6" fill="currentColor" fillOpacity="0.16"></rect>
      <rect x="4.2" y="3" width="15.6" height="18" rx="1.6" stroke="currentColor" strokeWidth="1.8"></rect>
      <path d="M12 10.2V9a1.7 1.7 0 1 0-1.7-1.7M12 10.2l-5 3.8h10zM4.2 17.4h15.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  ),
  floor: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M3 3h18v18H3z"></path><path d="M9 3v6"></path><path d="M15 9v6"></path><path d="M9 15v6"></path></svg>
  ),
  heat: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 21h18"></path><path d="M7 17c0-2 1.5-2.6 1.5-4S7 10.8 7 9s1.5-2.6 1.5-4"></path><path d="M12.5 17c0-2 1.5-2.6 1.5-4s-1.5-2.2-1.5-4 1.5-2.6 1.5-4"></path><path d="M18 17c0-2 1.5-2.6 1.5-4S18 10.8 18 9s1.5-2.6 1.5-4"></path></svg>
  ),
  furniture: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M2 11a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v6H2z"></path><path d="M4 19v2"></path><path d="M20 19v2"></path></svg>
  ),
  vitrage: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="2" width="16" height="20" rx="8"></rect><path d="M12 2v20"></path><path d="M4.5 8h15"></path><path d="M4.5 16h15"></path></svg>
  ),
  pin: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  gift: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M5 12v9h14v-9"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"></path></svg>
  ),
  percent: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
  ),
  calc: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="11" x2="8" y2="11.01"></line><line x1="12" y1="11" x2="12" y2="11.01"></line><line x1="16" y1="11" x2="16" y2="11.01"></line><line x1="8" y1="15" x2="8" y2="15.01"></line><line x1="12" y1="15" x2="12" y2="15.01"></line><line x1="16" y1="15" x2="16" y2="18"></line></svg>
  ),
  x: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
  ),
  arrow: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>
  ),
  camera: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3.5"></circle></svg>
  ),
  whatsapp: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.17 0 4.2.85 5.74 2.38a8.07 8.07 0 0 1 2.38 5.73c0 4.46-3.63 8.08-8.1 8.08a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.04 8.04 0 0 1-1.26-4.32c0-4.46 3.63-8.08 8.1-8.08Zm-3.6 4.34c-.17 0-.45.06-.69.31-.23.25-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.17 1.8 2.86 4.47 3.91.62.27 1.11.43 1.49.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.23-.17-.49-.3-.25-.13-1.51-.74-1.74-.83-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.39-.77-1.9-.2-.5-.41-.43-.56-.44h-.48Z"></path></svg>
  ),
  chevron: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m6 9 6 6 6-6"></path></svg>
  ),
  sliders: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line><circle cx="9" cy="6" r="2" fill="var(--bg)"></circle><circle cx="15" cy="12" r="2" fill="var(--bg)"></circle><circle cx="8" cy="18" r="2" fill="var(--bg)"></circle></svg>
  ),
  award: (p) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="9" r="6"></circle><path d="M8.5 14 7 22l5-3 5 3-1.5-8"></path></svg>
  ),
};

function Ph({ label, icon, img, eager, style }) {
  const Ic = I[icon] || I.camera;
  if (img) {
    return (
      <div className="ph has-img" style={style}>
        <img src={img} alt={label} loading={eager ? "eager" : "lazy"} />
      </div>
    );
  }
  return (
    <div className="ph" data-label={label} style={style}>
      <Ic className="ph-ic" />
    </div>
  );
}

const fmt = (n) => n.toLocaleString("ru-RU");

I.wa = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
I.tg = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true" {...props}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

I.plug = (p) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M6 8h12v2.5a6 6 0 0 1-12 0z" fill="currentColor" fillOpacity="0.16"></path>
    <path d="M6 8h12v2.5a6 6 0 0 1-12 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M9 8V3M15 8V3M12 16.5V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
  </svg>
);
I.valve = (p) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M13.5 12.4c2.5 3 3.7 4.9 3.7 6.3a3.7 3.7 0 0 1-7.4 0c0-1.4 1.2-3.3 3.7-6.3z" fill="currentColor" fillOpacity="0.16"></path>
    <path d="M13.5 12.4c2.5 3 3.7 4.9 3.7 6.3a3.7 3.7 0 0 1-7.4 0c0-1.4 1.2-3.3 3.7-6.3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"></path>
    <path d="M3 4.6h5.5a5 5 0 0 1 5 5v1.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M2.8 2.8h2.6v3.6H2.8z" fill="currentColor" fillOpacity="0.16"></path>
    <path d="M2.8 2.8h2.6v3.6H2.8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"></path>
  </svg>
);
I.roller = (p) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="2.5" y="4" width="13" height="6" rx="2" fill="currentColor" fillOpacity="0.16"></rect>
    <rect x="2.5" y="4" width="13" height="6" rx="2" stroke="currentColor" strokeWidth="1.8"></rect>
    <path d="M15.5 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M11 13v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
  </svg>
);

const PHONE = "+7 (995) 569-01-10";
const PHONE_HREF = "tel:+79955690110";

const UTM_KEY = "liora_utm";
const hasUtm = (q) => /(^|[?&])utm_/.test(q);
try {
  if (hasUtm(window.location.search)) sessionStorage.setItem(UTM_KEY, window.location.search);
} catch (e) { /* хранилище недоступно: метки берём только из адреса */ }

function leadQuery() {
  if (hasUtm(window.location.search)) return window.location.search;
  try { return sessionStorage.getItem(UTM_KEY) || ""; } catch (e) { return ""; }
}

function sendLead(data) {
  const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), 20000) : null;
  return fetch("https://api.liora-nsk.ru/lead.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.assign({}, data, { page: window.location.pathname, query: leadQuery() })),
    signal: ctrl ? ctrl.signal : undefined,
  }).then((response) => response.ok ? response.json() : null)
    .then((result) => result !== null && result.ok === true)
    .catch(() => false)
    .then((ok) => { clearTimeout(timer); return ok; });
}

I.kitchen = (p) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="2.6" y="12.4" width="18.8" height="8.4" rx="1.6" fill="currentColor" fillOpacity="0.16"></rect>
    <rect x="2.6" y="12.4" width="18.8" height="8.4" rx="1.6" stroke="currentColor" strokeWidth="1.8"></rect>
    <path d="M12 12.6v8.2M6.4 15.8h2.6M15 15.8h2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
    <rect x="13.4" y="3.2" width="8" height="5.6" rx="1.4" fill="currentColor" fillOpacity="0.16"></rect>
    <rect x="13.4" y="3.2" width="8" height="5.6" rx="1.4" stroke="currentColor" strokeWidth="1.8"></rect>
    <path d="M2.6 8.8h6.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
  </svg>
);
I.wardrobe = (p) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="4.2" y="2.8" width="15.6" height="17" rx="1.6" fill="currentColor" fillOpacity="0.16"></rect>
    <rect x="4.2" y="2.8" width="15.6" height="17" rx="1.6" stroke="currentColor" strokeWidth="1.8"></rect>
    <path d="M12 2.8v17" stroke="currentColor" strokeWidth="1.8"></path>
    <path d="M9.8 10.4v2.8M14.2 10.4v2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
    <path d="M6.6 19.8v1.6M17.4 19.8v1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
  </svg>
);

const DIRECTIONS = [
  { key: "okna",       icon: "window",   img: "img/dir-okna.jpg",    title: "Пластиковые окна",  desc: "Замер, доставка и установка за 1 день", price: "12 000 ₽", unit: "", href: "/okna" },
  { key: "balkony",    icon: "balcony",  img: "img/dir-balkon.jpg",  title: "Балконы и лоджии",  desc: "Остекление, утепление и отделка под ключ", price: "35 000 ₽", unit: "", href: "/balkony" },
  { key: "vitrazhi",   icon: "vitrage",  img: "img/dir-vitrazh.jpg", title: "Витражи",           desc: "Декоративное остекление для дома и офиса", price: "4 500 ₽", unit: "/м²", href: "/vitrazhi" },
  { key: "teplyy_pol", icon: "heat",     img: "img/dir-teplo.jpg", title: "Тёплые полы",       desc: "Электрические и инфракрасные, под любое покрытие", price: "900 ₽", unit: "/м²", href: "/teplyy-pol" },
  { key: "dveri_vhod", icon: "doorEntry",     img: "img/dir-dveri.jpg",   title: "Входные двери",     desc: "Металлические, с установкой и надёжным замком", price: "15 000 ₽", unit: "", href: "/dveri-vhodnye" },
  { key: "dveri_mk",   icon: "doorInterior",     img: "img/dir-dveri.jpg",   title: "Межкомнатные двери", desc: "Экошпон, массив и шпон, с установкой", price: "3 500 ₽", unit: "", href: "/dveri-mezhkomnatnye" },
  { key: "potolki",    icon: "ceiling",  img: "img/dir-potolki.jpg", title: "Натяжные потолки",  desc: "Матовые, глянцевые, сатиновые. Установка без пыли", price: "390 ₽", unit: "/м²", href: "/potolki" },
  { key: "mebel",      icon: "furniture",img: "img/dir-mebel.jpg", title: "Мебель на заказ",   desc: "Кухни, шкафы-купе, гардеробные по вашим размерам", price: "10 900 ₽", unit: "/пог. м", href: "/mebel" },
];

const NUMBERS = [
  { n: "2004", u: " г.", lbl: "с этого года работаем в Новосибирске и области" },
  { n: "20", u: "+ лет", lbl: "опыт специалистов, которые выполняют работы" },
  { n: "100", u: "%", lbl: "заказов по договору с фиксированной ценой" },
  { n: "8", u: "", lbl: "направлений: от окон до мебели на заказ" },
];

const WHY = [
  { icon: "house", title: "Всё для дома в одном месте", text: "Окна, балконы, двери, потолки и мебель организуем под ключ. Не нужно искать пять подрядчиков и стыковать их между собой, всё координируем мы." },
  { icon: "team", title: "Проверенные профессионалы", text: "Работы выполняют проверенные мастера, которые заняты своим делом больше 20 лет. Мы отвечаем за качество на каждом этапе, от замера до сдачи." },
  { icon: "doc", title: "Договор и фиксированная цена", text: "Цена из сметы не меняется в процессе. Все сроки и обязательства на бумаге." },
  { icon: "shield", title: "Гарантия по договору", text: "Срок гарантии на работы и на изделие прописываем в договоре по каждому направлению. Гарантия производителя на материалы сохраняется." },
  { icon: "ruler", title: "Бесплатный замер и смета", text: "Замерщик приедет в удобное время, посчитает точную смету. Это ни к чему вас не обязывает." },
  { icon: "broom", title: "Чисто после работ", text: "Накрываем мебель плёнкой, выносим мусор и упаковку. Сдаём объект, в котором можно жить сразу." },
];

const STAGES = [
  { t: "Заявка", d: "Форма на сайте, свяжемся с вами в рабочее время" },
  { t: "Бесплатный замер", d: "Замерщик приедет в удобный день, в том числе вечером" },
  { t: "Смета и договор", d: "Фиксируем цену и сроки на бумаге" },
  { t: "Материалы", d: "Привозим всё сами, точно к началу работ" },
  { t: "Работы на объекте", d: "Проверенные мастера работают аккуратно и по графику" },
  { t: "Сдача и гарантия", d: "Принимаете работу, получаете гарантию по договору" },
];


const PORTFOLIO = [
  { img: "img/potolok-3.jpg", title: "Потолок с фотопечатью", desc: "Печать на полотне, точечный свет, парящий короб", icon: "ceiling" },
  { img: "img/potolok-4.jpg", title: "Глянцевый потолок на кухню", desc: "Двухуровневый, зеркальный блеск, точечные светильники", icon: "ceiling" },
  { img: "img/potolok-5.jpg", title: "Матовый потолок с трек-светильником", desc: "Ровное матовое полотно, поворотный трек-светильник", icon: "ceiling" },
  { img: "img/potolok-6.jpg", title: "Потолок с магнитными линиями света", desc: "Световые линии по контуру, скрытая подсветка", icon: "ceiling" },
  { img: "img/potolok-1.jpg", title: "Потолок со световыми линиями", desc: "Перекрещенные линии света на матовом полотне", icon: "ceiling" },
  { img: "img/potolok-2.jpg", title: "Парящий потолок с контуром света", desc: "Световой контур по полотну, ровный матовый тон", icon: "ceiling" },
];

Object.assign(window, { I, Ph, fmt, PHONE, PHONE_HREF, sendLead, DIRECTIONS, NUMBERS, WHY, STAGES, PORTFOLIO });
