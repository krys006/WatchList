// =============================================
// NAV — scroll behavior
// =============================================
const mainNav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
    document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 300);
});

// =============================================
// HAMBURGER MENU
// =============================================
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const btn  = document.getElementById('hamburger');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
    document.getElementById('nav-menu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('click', function (e) {
    const nav = document.querySelector('#main-nav');
    if (!nav.contains(e.target)) closeMenu();
});

// =============================================
// BACKGROUND MUSIC — AUTOPLAY ON FIRST CLICK
// =============================================
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.35;

document.addEventListener('click', function startMusic() {
    bgMusic.play().catch(() => {});
    document.removeEventListener('click', startMusic);
}, { once: true });

// =============================================
// MOVIE DATA
// =============================================
const movies = {
    kenshin: {
        image: 'assets/roni.jpg',
        title: 'RUROUNI KENSHIN',
        meta: 'Live-Action · Japan · 2012–2021',
        rating: '⭐⭐⭐⭐⭐  9.5 / 10',
        synopsis: 'Based on the beloved manga and anime, Rurouni Kenshin follows Himura Kenshin — a legendary assassin turned wandering swordsman who has vowed never to kill again. The live-action series brings iconic characters to life with stunning choreography, emotional depth, and faithful storytelling across five films.',
        cast: [
            { actor: 'Takeru Satoh',    character: 'Himura Kenshin' },
            { actor: 'Emi Takei',       character: 'Kamiya Kaoru' },
            { actor: 'Yû Aoi',          character: 'Takani Megumi' },
            { actor: 'Ryunosuke Kamiki',character: 'Seta Sōjirō' },
            { actor: 'Tatsuya Fujiwara',character: 'Shishio Makoto' }
        ],
                details: ['Action', 'Samurai', 'Live-Action', 'Japan', '5 Films'],
        verdict: "I went in expecting a fun action film and came out emotionally wrecked. The fight choreography alone is worth the watch, but it's Takeru Satoh's quiet, restrained performance that makes this saga unforgettable. The Final and The Beginning back-to-back is one of the best ways to spend a weekend.",
        badge: 'LIVE-ACTION',
        trailer: 'f8cFqHeUVMs'
    },
    scarlet: {
        image: 'assets/scarlet.jpg',
        title: 'SCARLET HEART: RYEO',
        meta: 'K-Drama · SBS · Korea · 2016',
        rating: '⭐⭐⭐⭐⭐  9.2 / 10',
        synopsis: 'A modern woman is transported back to the Goryeo Dynasty, entangled in palace politics and a heartbreaking love story involving the royal princes. Known for stunning visuals, emotional performances, and an ending that still haunts viewers years later.',
        cast: [
            { actor: 'Lee Joon-gi',     character: 'Yi So-yeon' },
            { actor: 'Song Hye-kyo',    character: 'Jang Hye-jin' },
            { actor: 'Park Hyo-jin',    character: 'Kim Soo-jin' }
        ],
        details: ['K-Drama', 'Historical', 'Romance', 'Time Travel', '20 Episodes'],
        verdict: "This drama broke something in me and I am still not over it. IU and Lee Joon-gi have the kind of chemistry that makes every scene feel inevitable and heartbreaking at the same time. Watch it. Cry. Then watch it again knowing how it ends, it hits completely differently the second time.",
        badge: 'K-DRAMA',
        trailer: '2ljxyaAIphc'
    },
    jade: {
        image: 'assets/jade.jpg',
        title: 'PURSUIT OF JADE',
        meta: 'C-Drama · China',
        rating: '⭐⭐⭐⭐  8.7 / 10',
        synopsis: 'A beautifully crafted Chinese historical drama set in imperial China, following a story of identity, power, and romance against a backdrop of intricate court politics. Rich in costume detail and atmospheric storytelling.',
        cast: [
            { actor: 'Xu Ruohan',   character: 'Cheng Ruoyu' },
            { actor: 'Liu Yuning',  character: 'Pei Wenxuan' },
            { actor: 'Guo Xiaoting',character: 'Consort Xian' },
            { actor: 'Jin Ze',      character: 'Emperor Jinghe' }
        ],
        details: ['C-Drama', 'Historical', 'Romance', 'Imperial China', 'Period Drama'],
        verdict: "If you've never watched a C-Drama before, this is a perfect entry point. It has all the hallmarks of the genre — stunning visuals, slow-burn romance, court intrigue — but it never feels overwhelming. The lead chemistry is quiet and restrained in the best possible way. A genuinely underrated gem.",
        badge: 'C-DRAMA',
        trailer: 'P5ZRjhsyioc'
    },
    house: {
        image: 'assets/house.webp',
        title: 'HOUSE M.D.',
        meta: 'TV Series · Fox · USA · 2004–2012',
        rating: '⭐⭐⭐⭐⭐  9.0 / 10',
        synopsis: 'Dr. Gregory House is a brilliant but misanthropic diagnostician at Princeton-Plainsboro Teaching Hospital. Armed with a cane, a Vicodin habit, and zero bedside manner, House and his team tackle seemingly impossible medical cases — each a puzzle wrapped in sharp wit and human drama.',
        cast: [
            { actor: 'Hugh Laurie',      character: 'Dr. Gregory House' },
            { actor: 'Lisa Edelstein',   character: 'Dr. Lisa Cuddy' },
            { actor: 'Omar Epps',        character: 'Dr. Eric Foreman' },
            { actor: 'Jesse Spencer',    character: 'Dr. Robert Chase' },
            { actor: 'Jennifer Morrison',character: 'Dr. Allison Cameron' }
        ],
        details: ['Medical Drama', 'USA', '8 Seasons', '177 Episodes', 'Hugh Laurie', 'Fox Network'],
        verdict: "Eight seasons and it never gets old. Hugh Laurie's performance is one of the greatest in television history — funny, cruel, and quietly devastating in equal measure. The medical cases are addictive, but it's the character study at the center that keeps you coming back. Start at Season 1 and don't let anyone spoil the finale.",
        badge: 'TV SERIES',
        trailer: '64LGOCKxTdE'
    },
    interstellar: {
        image: 'assets/star.jpg',
        title: 'INTERSTELLAR',
        meta: 'Film · Christopher Nolan · 2014',
        rating: '⭐⭐⭐⭐⭐  10 / 10',
        synopsis: "With Earth's future at stake, a former NASA pilot leads a team through a wormhole near Saturn in search of a new home for humanity — an emotionally devastating journey across space-time itself.",
        cast: [
            { actor: 'Matthew McConaughey', character: 'Cooper' },
            { actor: 'Anne Hathaway',       character: 'Dr. Amelia Brand' },
            { actor: 'Jessica Chastain',    character: 'Murph (adult)' },
            { actor: 'Michael Caine',       character: 'Professor Brand' },
            { actor: 'Matt Damon',          character: 'Dr. Mann' }
        ],
        details: ['Sci-Fi', 'Space', 'Christopher Nolan', '2014', 'Matthew McConaughey', 'Oscar Winner'],
        verdict: "There is no film I have rewatched more, and each time it hits harder. The docking scene. The water planet. The bookshelf. Hans Zimmer's score swelling at exactly the right moment. This is the film I show people when I want them to understand why cinema matters. A perfect 10.",
        badge: 'FILM',
        trailer: 'zSWdZVtXT7E'
    }
};

// =============================================
// HERO SLIDER
// =============================================
const heroOrder = ['interstellar', 'kenshin', 'scarlet', 'jade', 'house'];
let currentSlide = 0;
let currentHeroId = heroOrder[0];
let heroTimer = null;

function updateHeroContent(id) {
    const m = movies[id];
    document.getElementById('hero-badge').textContent    = `// ${m.badge} //`;
    document.getElementById('hero-title').textContent    = m.title;
    document.getElementById('hero-meta').textContent     = m.meta;
    document.getElementById('hero-synopsis').textContent = m.synopsis;
    document.getElementById('hero-rating').textContent   = m.rating;
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.hero-dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;
    currentHeroId = heroOrder[index];

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    updateHeroContent(currentHeroId);

    // Reset auto-advance timer
    clearInterval(heroTimer);
    heroTimer = setInterval(nextSlide, 7000);
}

function nextSlide() {
    goToSlide((currentSlide + 1) % heroOrder.length);
}

// Initialize hero
updateHeroContent(heroOrder[0]);
heroTimer = setInterval(nextSlide, 7000);

// =============================================
// MODAL
// =============================================
function openModal(id) {
    const m = movies[id];
    if (!m) return;

    const modalImg = document.getElementById('modal-img');
    if (m.image) {
        modalImg.src = m.image;
        modalImg.style.display = 'block';
    } else {
        modalImg.style.display = 'none';
    }

    document.getElementById('modal-title').textContent    = m.title;
    document.getElementById('modal-meta').textContent     = m.meta;
    document.getElementById('modal-rating').textContent   = m.rating;
    document.getElementById('modal-synopsis').textContent = m.synopsis;
    document.getElementById('modal-details').innerHTML    = m.details.map(d => `<span class="detail-tag">${d}</span>`).join('');

    document.getElementById('modal-cast').innerHTML = m.cast.map(c => `
        <div class="cast-row">
            <span class="cast-actor">${c.actor}</span>
            <span class="cast-divider">—</span>
            <span class="cast-character">${c.character}</span>
        </div>
    `).join('');

    document.getElementById('modal-verdict').textContent = m.verdict;

    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('back-to-top').style.display = 'none';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('back-to-top').style.display = '';
}

function closeModalOutside(e) {
    if (e.target.id === 'modal-overlay') closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// =============================================
// SHOW MORE / LESS
// =============================================
let expanded = false;

function toggleMore() {
    expanded = !expanded;
    document.getElementById('more-content').classList.toggle('expanded', expanded);
    document.getElementById('show-more-btn').textContent = expanded ? '▴  SHOW LESS' : '▾ \u00A0 SHOW MORE';
}



// =============================================
// TRAILER LIGHTBOX
// =============================================
function openTrailer(id) {
    const m = movies[id];
    if (!m || !m.trailer) return;

    const overlay = document.getElementById('trailer-overlay');
    const iframe  = document.getElementById('trailer-iframe');

    // pause background music
    bgMusic.pause();

    iframe.src = `https://www.youtube.com/embed/${m.trailer}?autoplay=1&rel=0&modestbranding=1`;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTrailer() {
    const overlay = document.getElementById('trailer-overlay');
    const iframe  = document.getElementById('trailer-iframe');

    overlay.classList.remove('active');
    iframe.src = ''; // stops video playback immediately
    document.body.style.overflow = '';

 // resume background music
    bgMusic.play().catch(() => {});

}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeTrailer();
});


// =============================================
// SCROLL FADE-IN
// =============================================
const fadeEls = document.querySelectorAll(
    'article, aside, blockquote, .movie-card, .review-form, ol, ul, dl, .section-header, .section-rule'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fires once then stops watching
        }
    });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));







// =============================================
// STAT COUNTERS
// =============================================
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1400;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current);
    }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

// =============================================
// MOOD BOARD
// =============================================
const moodData = {
    'Action': {
        title: 'RUROUNI KENSHIN',
        tag: 'Live-Action · Japan',
        line: 'Explosive sword fights, iconic characters, and five films of pure adrenaline. If you want action done right, this is it.',
        id: 'kenshin'
    },
    'Romance': {
        title: 'SCARLET HEART: RYEO',
        tag: 'K-Drama · Korea',
        line: 'A love story so painful it stays with you for years. Beautiful, devastating, and absolutely worth every tear.',
        id: 'scarlet'
    },
    'Sci-Fi': {
        title: 'INTERSTELLAR',
        tag: 'Film · Christopher Nolan',
        line: 'Science fiction at its most emotionally ambitious. Space, time, and love collide in ways you won\'t see coming.',
        id: 'interstellar'
    },
    'Historical': {
        title: 'PURSUIT OF JADE',
        tag: 'C-Drama · Imperial China',
        line: 'Rich court intrigue, stunning period costumes, and a romance that unfolds across political chaos. A hidden gem.',
        id: 'jade'
    },
    'Medical': {
        title: 'HOUSE M.D.',
        tag: 'TV Series · USA',
        line: 'Diagnosis as drama. Eight seasons of brilliant, infuriating, unforgettable television fronted by Hugh Laurie.',
        id: 'house'
    },
    'Samurai': {
        title: 'RUROUNI KENSHIN',
        tag: 'Live-Action · Japan',
        line: 'The definitive live-action samurai saga. Takeru Satoh brings Kenshin to life with grace, speed, and heart.',
        id: 'kenshin'
    },
    'Space': {
        title: 'INTERSTELLAR',
        tag: 'Film · Christopher Nolan · 2014',
        line: 'Wormholes, black holes, and time dilation — rendered with jaw-dropping accuracy and scored by Hans Zimmer.',
        id: 'interstellar'
    }
};

document.querySelectorAll('.mood-tag').forEach(btn => {
    btn.addEventListener('click', () => {
        const genre = btn.dataset.genre;
        const data  = moodData[genre];

        // toggle active state
        document.querySelectorAll('.mood-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // update result panel
        const result = document.getElementById('mood-result');
        result.classList.remove('pop');
        void result.offsetWidth; // force reflow to restart animation
        result.classList.add('pop');

        result.innerHTML = `
            <div class="mood-result-title">${data.title}</div>
            <div class="mood-result-tag">${data.tag}</div>
            <div class="mood-result-line">${data.line}</div>
            <a class="mood-result-cta" onclick="openModal('${data.id}')">▸ VIEW DETAILS</a>
        `;
    });
});









// =============================================
// REVIEW FORM
// =============================================
let editingCard = null;

function submitReview() {
    const name   = document.getElementById('reviewer-name').value.trim();
    const movie  = document.getElementById('movie-title').value;
    const rating = document.getElementById('rating').value;
    const text   = document.getElementById('review-text').value.trim();

    if (!name || !movie || !rating || !text) {
        alert('Please fill in all fields before submitting!');
        return;
    }

    if (editingCard) {
        editingCard.querySelector('.review-name').textContent  = name;
        editingCard.querySelector('.review-movie').textContent = movie;
        editingCard.querySelector('.review-stars').textContent = rating;
        editingCard.querySelector('.review-text').textContent  = '"' + text + '"';
        editingCard.dataset.reviewText = text;
        editingCard = null;
        document.querySelector('.btn-primary').textContent = 'SUBMIT REVIEW';
    } else {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.dataset.reviewText = text;
        card.innerHTML = `
            <div class="review-header">
                <span class="review-name">${escapeHTML(name)}</span>
                <span class="review-movie">${escapeHTML(movie)}</span>
                <span class="review-stars">${rating}</span>
            </div>
            <p class="review-text">"${escapeHTML(text)}"</p>
            <div class="review-actions">
                <button class="btn-edit" onclick="editReview(this)">✎ EDIT</button>
                <button class="btn-delete" onclick="deleteReview(this)">✕ DELETE</button>
            </div>
        `;
        document.getElementById('reviews-list').prepend(card);
    }

    clearForm();
}

function editReview(btn) {
    const card = btn.closest('.review-card');
    editingCard = card;
    document.getElementById('reviewer-name').value = card.querySelector('.review-name').textContent;
    document.getElementById('movie-title').value   = card.querySelector('.review-movie').textContent;
    document.getElementById('rating').value        = card.querySelector('.review-stars').textContent;
    document.getElementById('review-text').value   = card.dataset.reviewText;
    document.querySelector('.btn-primary').textContent = 'UPDATE REVIEW';
    document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
}

function deleteReview(btn) {
    const card = btn.closest('.review-card');
    if (confirm('Delete this review?')) {
        card.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => card.remove(), 300);
        if (editingCard === card) {
            editingCard = null;
            document.querySelector('.btn-primary').textContent = 'SUBMIT REVIEW';
            clearForm();
        }
    }
}

function clearForm() {
    ['reviewer-name', 'movie-title', 'rating', 'review-text'].forEach(id => {
        document.getElementById(id).value = '';
    });
}

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


// =============================================
// BACK TO TOP
// =============================================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}