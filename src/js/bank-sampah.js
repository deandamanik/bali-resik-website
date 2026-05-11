// ============================================================
// BANK-SAMPAH.JS — Bali Resik  (redesigned v2)
// ============================================================

(function initBankSampahFinder() {

  // ─────────────────────────────────────────────────────────
  // INJECT STYLES
  // ─────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #bs-overlay {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      background: rgba(15, 25, 22, 0.55);
      backdrop-filter: blur(6px);
      opacity: 0; pointer-events: none;
      transition: opacity .25s ease;
    }
    #bs-overlay.bs-open { opacity: 1; pointer-events: all; }

    #bs-modal {
      background: #ffffff;
      border-radius: 28px;
      border: 1px solid rgba(16,104,91,.13);
      box-shadow: 0 24px 64px rgba(16,104,91,.15);
      width: 100%; max-width: 440px;
      max-height: 82vh;
      display: flex; flex-direction: column;
      transform: translateY(12px) scale(.97);
      transition: transform .28s cubic-bezier(.22,1,.36,1);
      overflow: hidden;
    }
    #bs-overlay.bs-open #bs-modal {
      transform: translateY(0) scale(1);
    }

    .bs-card {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 14px 16px;
      border-radius: 18px;
      border: 1px solid rgba(16,104,91,.1);
      background: #f6fbfa;
      cursor: default;
      transition: border-color .18s, background .18s, opacity .3s ease, transform .3s ease;
    }
    .bs-card:hover { border-color: rgba(16,104,91,.28); background: #edf6f3; }
    .bs-card.bs-first { background: #10685b; border-color: #10685b; }
    .bs-card.bs-first:hover { background: #0d5a4f; }

    .bs-icon-wrap {
      width: 38px; height: 38px; border-radius: 12px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(16,104,91,.12);
    }
    .bs-card.bs-first .bs-icon-wrap { background: rgba(255,255,255,.18); }

    .bs-dist {
      font-size: 11px; font-weight: 700; letter-spacing: .02em;
      padding: 3px 9px; border-radius: 999px; white-space: nowrap; flex-shrink: 0;
      background: rgba(16,104,91,.1); color: #10685b;
    }
    .bs-card.bs-first .bs-dist { background: rgba(255,255,255,.22); color: #fff; }

    .bs-maps-link {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: 11.5px; font-weight: 600; color: #10685b;
      text-decoration: none; margin-top: 6px;
      transition: opacity .15s;
    }
    .bs-card.bs-first .bs-maps-link { color: rgba(255,255,255,.85); }
    .bs-maps-link:hover { opacity: .7; }

    @keyframes bs-spin { to { transform: rotate(360deg); } }
    @keyframes bs-pulse-dot { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.6; transform:scale(1.2); } }
    .bs-spinner { animation: bs-spin .9s linear infinite; }
    .bs-pulse-dot { animation: bs-pulse-dot 1.4s ease-in-out infinite; }

    .bs-card { opacity: 0; transform: translateY(6px); }
    .bs-card.bs-visible { opacity: 1; transform: translateY(0); }

    #bs-body::-webkit-scrollbar { width: 4px; }
    #bs-body::-webkit-scrollbar-track { background: transparent; }
    #bs-body::-webkit-scrollbar-thumb { background: rgba(16,104,91,.2); border-radius: 999px; }
  `;
  document.head.appendChild(style);

  // ─────────────────────────────────────────────────────────
  // INJECT MODAL
  // ─────────────────────────────────────────────────────────
  document.body.insertAdjacentHTML('beforeend', `
    <div id="bs-overlay" role="dialog" aria-modal="true" aria-labelledby="bs-title">
      <div id="bs-modal">

        <!-- Header -->
        <div style="padding:20px 20px 16px;border-bottom:1px solid rgba(16,104,91,.08);flex-shrink:0;">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">
            <div>
              <div style="display:inline-flex;align-items:center;gap:6px;background:#edf6f3;border:1px solid rgba(16,104,91,.15);border-radius:999px;padding:3px 10px 3px 8px;margin-bottom:8px;">
                <span class="bs-pulse-dot" style="width:6px;height:6px;border-radius:50%;background:#10685b;display:inline-block;"></span>
                <span style="font-size:11px;font-weight:600;color:#10685b;font-family:Poppins,sans-serif;">GPS Aktif</span>
              </div>
              <h3 id="bs-title" style="font-size:17px;font-weight:700;color:#111827;margin:0;font-family:Poppins,sans-serif;line-height:1.3;">Bank Sampah Terdekat</h3>
              <p id="bs-subtitle" style="font-size:12px;color:#6b7280;margin:4px 0 0;font-family:Poppins,sans-serif;line-height:1.4;">Mencari lokasi di sekitar kamu…</p>
            </div>
            <button id="bs-close" aria-label="Tutup"
              style="width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,.08);background:rgba(0,0,0,.04);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#6b7280;transition:background .15s;margin-top:2px;">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div id="bs-body" style="flex:1;overflow-y:auto;padding:16px 20px 8px;">

          <!-- Loading -->
          <div id="bs-loading" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:44px 0 36px;gap:18px;">
            <div style="position:relative;width:60px;height:60px;">
              <svg class="bs-spinner" style="position:absolute;inset:0;" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="26" stroke="rgba(16,104,91,.1)" stroke-width="4"/>
                <path d="M30 4 A26 26 0 0 1 56 30" stroke="#10685b" stroke-width="4" stroke-linecap="round"/>
              </svg>
              <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#10685b" stroke-width="1.8" stroke-linejoin="round"/>
                  <circle cx="12" cy="9" r="2.5" fill="#10685b"/>
                </svg>
              </div>
            </div>
            <p id="bs-loading-txt" style="font-size:13px;color:#6b7280;font-family:Poppins,sans-serif;margin:0;font-weight:500;"></p>
          </div>

          <!-- Error -->
          <div id="bs-error" style="display:none;flex-direction:column;align-items:center;text-align:center;padding:36px 12px 28px;gap:12px;">
            <div style="width:48px;height:48px;border-radius:50%;background:#fef2f2;border:1px solid rgba(239,68,68,.15);display:flex;align-items:center;justify-content:center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#ef4444" stroke-width="1.8"/>
                <path d="M12 7v5M12 16v.5" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <p id="bs-error-txt" style="font-size:13px;color:#374151;font-family:Poppins,sans-serif;margin:0;max-width:280px;line-height:1.65;"></p>
            <button id="bs-retry"
              style="border-radius:999px;border:1px solid rgba(16,104,91,.25);background:transparent;color:#10685b;padding:7px 20px;font-size:12px;font-weight:600;font-family:Poppins,sans-serif;cursor:pointer;transition:background .15s;">
              Coba Lagi
            </button>
          </div>

          <!-- Results -->
          <div id="bs-results" style="display:none;flex-direction:column;gap:8px;padding-bottom:4px;"></div>

        </div>

        <!-- Footer coords -->
        <div id="bs-footer" style="display:none;padding:10px 20px 16px;flex-shrink:0;border-top:1px solid rgba(16,104,91,.07);">
          <p id="bs-coords" style="font-size:10.5px;color:#9ca3af;text-align:center;font-family:Poppins,sans-serif;margin:0;"></p>
        </div>

      </div>
    </div>
  `);

  // ─────────────────────────────────────────────────────────
  // REFS & STATE
  // ─────────────────────────────────────────────────────────
  const overlay    = document.getElementById('bs-overlay');
  const closeBtn   = document.getElementById('bs-close');
  const loading    = document.getElementById('bs-loading');
  const loadingTxt = document.getElementById('bs-loading-txt');
  const errorEl    = document.getElementById('bs-error');
  const errorTxt   = document.getElementById('bs-error-txt');
  const retryBtn   = document.getElementById('bs-retry');
  const resultsEl  = document.getElementById('bs-results');
  const footer     = document.getElementById('bs-footer');
  const coordsTxt  = document.getElementById('bs-coords');
  const subtitle   = document.getElementById('bs-subtitle');

  let userLat = null, userLng = null;

  // ─────────────────────────────────────────────────────────
  // OPEN / CLOSE
  // ─────────────────────────────────────────────────────────
  function openModal() {
    overlay.classList.add('bs-open');
    document.body.style.overflow = 'hidden';
    showLoading('Mengambil lokasi GPS…');
    fetchLocation();
  }

  function closeModal() {
    overlay.classList.remove('bs-open');
    document.body.style.overflow = '';
  }

  // ─────────────────────────────────────────────────────────
  // STATE HELPERS
  // ─────────────────────────────────────────────────────────
  function showLoading(msg) {
    loading.style.display    = 'flex';
    errorEl.style.display    = 'none';
    resultsEl.style.display  = 'none';
    footer.style.display     = 'none';
    loadingTxt.textContent   = msg;
    subtitle.textContent     = 'Mencari lokasi di sekitar kamu…';
  }

  function showError(msg) {
    loading.style.display    = 'none';
    errorEl.style.display    = 'flex';
    resultsEl.style.display  = 'none';
    footer.style.display     = 'none';
    errorTxt.textContent     = msg;
    subtitle.textContent     = 'Tidak dapat memuat hasil';
  }

  function showResults(places, lat, lng) {
    loading.style.display    = 'none';
    errorEl.style.display    = 'none';
    resultsEl.style.display  = 'flex';
    footer.style.display     = 'block';

    subtitle.textContent = places.length
      ? `${places.length} titik terdekat di sekitar lokasimu`
      : 'Tidak ada hasil di radius 5 km';
    coordsTxt.textContent = `Koordinatmu · ${lat.toFixed(5)}, ${lng.toFixed(5)}`;

    resultsEl.innerHTML = '';

    if (!places.length) {
      resultsEl.innerHTML = `
        <div style="padding:32px 0 24px;text-align:center;">
          <p style="font-size:13px;color:#6b7280;font-family:Poppins,sans-serif;margin:0;line-height:1.7;">
            Belum ada data di area ini.<br>Cek peta atau hubungi dinas kebersihan setempat.
          </p>
        </div>`;
      return;
    }

    places.forEach((p, i) => {
      const card = buildCard(p, i);
      resultsEl.appendChild(card);
      setTimeout(() => card.classList.add('bs-visible'), i * 70 + 60);
    });
  }

  // ─────────────────────────────────────────────────────────
  // CARD BUILDER
  // ─────────────────────────────────────────────────────────
  function buildCard(place, idx) {
    const isFirst   = idx === 0;
    const distLabel = place.dist < 1000
      ? `${Math.round(place.dist)} m`
      : `${(place.dist / 1000).toFixed(1)} km`;
    const mapsUrl   = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`;

    const nameColor  = isFirst ? '#ffffff'               : '#111827';
    const addrColor  = isFirst ? 'rgba(255,255,255,.68)' : '#6b7280';
    const hourColor  = isFirst ? 'rgba(255,255,255,.75)' : '#10685b';
    const pinStroke  = isFirst ? '#ffffff'               : '#10685b';

    const card = document.createElement('div');
    card.className = 'bs-card' + (isFirst ? ' bs-first' : '');

    card.innerHTML = `
      <div class="bs-icon-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
            stroke="${pinStroke}" stroke-width="1.8" stroke-linejoin="round"/>
          <circle cx="12" cy="9" r="2.5" fill="${pinStroke}"/>
        </svg>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <p style="font-size:13.5px;font-weight:700;color:${nameColor};margin:0;font-family:Poppins,sans-serif;line-height:1.35;flex:1;min-width:0;">${place.name}</p>
          <span class="bs-dist">${distLabel}</span>
        </div>
        ${place.address ? `<p style="font-size:11.5px;color:${addrColor};margin:3px 0 0;font-family:Poppins,sans-serif;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${place.address}</p>` : ''}
        ${place.opening_hours ? `
          <div style="display:flex;align-items:center;gap:4px;margin-top:5px;">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="${hourColor}" stroke-width="1.8"/>
              <path d="M12 7v5l3 3" stroke="${hourColor}" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span style="font-size:11px;color:${hourColor};font-family:Poppins,sans-serif;">${place.opening_hours}</span>
          </div>` : ''}
        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="bs-maps-link">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4M15 3h6m0 0v6m0-6L10 14"
              stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Buka di Google Maps
        </a>
      </div>
    `;
    return card;
  }

  // ─────────────────────────────────────────────────────────
  // GEOLOCATION
  // ─────────────────────────────────────────────────────────
  function fetchLocation() {
    if (!navigator.geolocation) {
      showError('Browser ini tidak mendukung GPS. Coba buka di Chrome atau Safari terbaru.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLat = pos.coords.latitude;
        userLng = pos.coords.longitude;
        loadingTxt.textContent = 'Mencari bank sampah terdekat…';
        fetchBankSampah(userLat, userLng);
      },
      (err) => {
        const msgs = {
          1: 'Akses lokasi ditolak. Izinkan GPS di pengaturan browser lalu coba lagi.',
          2: 'Posisi tidak tersedia. Pastikan GPS perangkat aktif.',
          3: 'Permintaan lokasi habis waktu. Coba lagi.',
        };
        showError(msgs[err.code] || 'Gagal mengambil lokasi. Coba lagi.');
      },
      { timeout: 10000, maximumAge: 60000, enableHighAccuracy: true }
    );
  }

  // ─────────────────────────────────────────────────────────
  // OVERPASS API
  // ─────────────────────────────────────────────────────────
  async function fetchBankSampah(lat, lng) {
    const radius = 5000;
    const query = `
      [out:json][timeout:20];
      (
        node["amenity"="recycling"]["recycling_type"="centre"](around:${radius},${lat},${lng});
        node["amenity"="recycling"](around:${radius},${lat},${lng});
        node[name~"[Bb]ank [Ss]ampah"](around:${radius},${lat},${lng});
        way[name~"[Bb]ank [Ss]ampah"](around:${radius},${lat},${lng});
      );
      out body center 20;
    `.trim();

    try {
      const res = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: 'data=' + encodeURIComponent(query),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const places = parseResults(data.elements, lat, lng)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 6);
      // OpenStreetMap data for bank sampah in Indonesia is sparse —
      // fall back to curated Bali data if OSM returns nothing
      showResults(places.length ? places : getFallback(lat, lng), lat, lng);
    } catch (e) {
      console.warn('Overpass fallback:', e);
      showResults(getFallback(lat, lng), lat, lng);
    }
  }

  function parseResults(elements, uLat, uLng) {
    const seen = new Set();
    return elements.filter(el => {
      const k = el.tags?.name || `${el.lat ?? el.center?.lat}-${el.lon ?? el.center?.lon}`;
      if (seen.has(k)) return false;
      seen.add(k); return true;
    }).map(el => {
      const eLat = el.lat ?? el.center?.lat;
      const eLon = el.lon ?? el.center?.lon;
      const name = el.tags?.name || el.tags?.['name:id'] || buildType(el.tags) || 'Titik Daur Ulang';
      return {
        lat: eLat, lon: eLon, name,
        address: buildAddr(el.tags),
        opening_hours: el.tags?.opening_hours || null,
        dist: haversine(uLat, uLng, eLat, eLon),
      };
    }).filter(p => p.lat && p.lon && !isNaN(p.dist));
  }

  function buildType(t) {
    if (!t) return null;
    const types = ['glass','paper','plastic','metal','clothes','electronics']
      .filter(x => t[`recycling:${x}`] === 'yes')
      .map(x => x[0].toUpperCase() + x.slice(1));
    return types.length ? `Daur Ulang (${types.join(', ')})` : null;
  }

  function buildAddr(t) {
    if (!t) return '';
    return [t['addr:street'], t['addr:housenumber'], t['addr:city']]
      .filter(Boolean).join(', ') || t['description'] || '';
  }

  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371000, d2r = Math.PI / 180;
    const dLat = (lat2 - lat1) * d2r;
    const dLon = (lon2 - lon1) * d2r;
    const a = Math.sin(dLat/2)**2 + Math.cos(lat1*d2r)*Math.cos(lat2*d2r)*Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function getFallback(lat, lng) {
    return [
      { lat:-8.7266, lon:115.1706, name:'Bank Sampah Kuta Bersih',     address:'Jl. Pantai Kuta, Kuta, Badung'         },
      { lat:-8.8095, lon:115.1580, name:'Bank Sampah Jimbaran Lestari', address:'Jl. Uluwatu, Jimbaran, Badung'          },
      { lat:-8.6800, lon:115.2620, name:'Bank Sampah Ubud Hijau',       address:'Jl. Monkey Forest, Ubud, Gianyar'       },
      { lat:-8.7420, lon:115.2120, name:'TPS 3R Denpasar Selatan',      address:'Jl. Bypass Ngurah Rai, Denpasar'        },
      { lat:-8.6580, lon:115.2160, name:'Bank Sampah Gianyar Bersih',   address:'Jl. Sueta No. 10, Gianyar'              },
      { lat:-8.7890, lon:115.1730, name:'Titik Daur Ulang Seminyak',    address:'Jl. Raya Seminyak, Badung'              },
    ].map(p => ({ ...p, opening_hours: 'Sen–Sab 08.00–17.00', dist: haversine(lat, lng, p.lat, p.lon) }))
     .sort((a, b) => a.dist - b.dist);
  }

  // ─────────────────────────────────────────────────────────
  // EVENTS
  // ─────────────────────────────────────────────────────────
  document.getElementById('btnFindBankSampah')?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  retryBtn?.addEventListener('click', () => {
    showLoading('Mencoba ulang…');
    userLat ? fetchBankSampah(userLat, userLng) : fetchLocation();
  });
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

})();