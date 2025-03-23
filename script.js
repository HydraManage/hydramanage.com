// Blog post data - Add/edit entries here
const blogPosts = [
  {
    title: "Why Losing My First Model Turned Out Amazing",
    date: "1st December 2024",
    category: "Story",
    readTime: "28 Minutes Reading Time",
    viewedTimes: "1.79K Visits",
    image: "assets/blog-images/why-losing-my-first.png",
    summary: "Losing my first OnlyFans model felt like a disaster at the time, but it turned out to be a turning point for my agency. This post reflects on the hard lessons learned, the red flags I ignored, and how the experience ultimately helped me build a stronger, more resilient business.",
    contentUrl: "assets/blog-content/why-losing-my-first.html",
    link: "single.html?postId=0",
    featured: true
  },
  {
    title: "From Panic Calls to Power Plays: My Journey to Building a Foolproof OnlyFans Agency",
    date: "8th September 2024",
    category: "Story",
    readTime: "16 Minutes Reading Time",
    viewedTimes: "1.47K Visits",
    image: "assets/blog-images/from-panic-calls.png",
    summary: "In this post, I share my personal journey and proven strategies for launching and managing a thriving OnlyFans agency. Learn essential tips on recruiting talented models, driving consistent traffic, and effectively managing your team to overcome common industry challenges.",
    contentUrl: "assets/blog-content/from-panic-calls.html",
    link: "single.html?postId=1",
    featured: true
  },
  {
    title: "Chatting: Why Sales Is the True Money-Maker in OnlyFans Management",
    date: "23rd August 2024",
    category: "Guides",
    readTime: "11 Minutes Reading Time",
    viewedTimes: "1.02K Visits",
    image: "assets/blog-images/chatting-why-sales-is.png",
    summary: "Chatting is often overlooked in the beginning, but it's actually the main source of revenue for most OnlyFans agencies. In this post, I share my personal approach to finding top-notch chatters, training them, and managing the unique hurdles that come with premium content sales.",
    contentUrl: "assets/blog-content/chatting-why-sales-is.html",
    link: "single.html?postId=2",
    featured: true
  },
  {
    title: "Lessons from Losing My Valuable OnlyFans Creators: The 10 Mistakes I'll Always Try To Avoid",
    date: "2nd July 2024",
    category: "Lessons",
    readTime: "22 Minutes Reading Time",
    viewedTimes: "1.31K Visits",
    image: "assets/blog-images/10-mistakes-I-will-avoid.png",
    summary: "Recruiting and retaining OnlyFans models is a challenge many underestimate. This post dives into the complexities of working with creators, highlighting the unique fears, motivations, and pitfalls that can lead to their departure. Discover the top 10 mistakes to avoid and strategies to build long-term, successful partnerships.",
    contentUrl: "assets/blog-content/10-mistakes-I-will-avoid.html",
    link: "single.html?postId=3",
    featured: true
  },
  {
    title: "Why Did I Choose the OnlyFans Management Business?",
    date: "16th April 2024",
    category: "Story",
    readTime: "31 Minutes Reading Time",
    viewedTimes: "2.71K Visits",
    image: "assets/blog-images/why-did-I-choose-this-business.png",
    summary: "Ever wondered what leads someone to choose OnlyFans management as a career? This post dives into the motivations, challenges, and lessons learned from building an agency in one of the most dynamic and demanding industries. A candid reflection on how creativity, resilience, and a knack for problem-solving shaped this unconventional journey.",
    contentUrl: "assets/blog-content/why-did-I-choose-this-business.html",
    link: "single.html?postId=4",
    featured: true
  },
  {
    title: "What I Learned About Sales in My Experience as an Owner of an OnlyFans Management Company",
    date: "27th January 2024",
    category: "Lessons",
    readTime: "23 Minutes Reading Time",
    viewedTimes: "1.80K Visits",
    image: "assets/blog-images/what-I-learned-about-salles.png",
    summary: "Ever wondered how OnlyFans agencies actually thrive, grow, and build lasting relationships with their subscribers? In this post, I share the candid lessons I've learned about sales during my journey as an OnlyFans agency owner, revealing the creative and sometimes unconventional tactics that actually drive conversions.",
    contentUrl: "assets/blog-content/what-I-learned-about-salles.html",
    link: "single.html?postId=5",
    featured: true
  },
  {
    title: "Always Start Early with Recruiting Models",
    date: "1st November 2023",
    category: "Lessons",
    readTime: "12 Minutes Reading Time",
    viewedTimes: "1.12K Visits",
    image: "assets/blog-images/always-start-early-with-recruiting.png",
    summary: "In this post, I explore the critical importance of initiating your recruitment efforts early when building an OnlyFans agency. Learn effective strategies to attract and engage models, establish trust, and create a strong talent pipeline before your official launch. Gain insights from my personal experiences to streamline your recruitment process and set your agency up for long-term success.",
    contentUrl: "assets/blog-content/always-start-early-with-recruiting.html",
    link: "single.html?postId=6",
    featured: true
  },
  {
    title: "How I Identify Scammers When Searching for Knowledge",
    date: "30th June 2024",
    category: "Guides",
    readTime: "23 Minutes Reading Time",
    viewedTimes: "1.66K Visits",
    image: "assets/blog-images/scammers.png",
    summary: "The knowledge market in the OnlyFans management space is rife with scammers promising quick success and flashy results. This post explores the red flags to watch out for, how to identify genuine mentors, and the steps you can take to protect your time and money while trying to find legitimate knowledge.",
    contentUrl: "assets/blog-content/scammers.html",
    link: "single.html?postId=7",
    featured: true
  }
];

// Render different post types based on position
function renderPost(post, index) {
  if (index < 2) {
    return renderBigPost(post, index);
  }
  return renderGridPost(post);
}

function renderBigPost(post, index) {
  const layoutClass = index % 2 === 0 ? 'image-left' : 'image-right';
  return `
  <article class="big-post ${layoutClass}">
      <div class="big-post-content">
          <a href="${post.link}" class="big-post-image">
              <div class="post-category">${post.category} <span class="category-triangle"></span></div>
              <img src="${post.image}" alt="${post.title}">
          </a>
          <div class="big-post-text">
              <div class="post-meta big-post-meta">${post.date}</div>
              <h2 class="big-post-title">${post.title}</h2>
              <p class="big-post-summary">${post.summary}</p>
              <a href="${post.link}" class="read-button big-post-button">Read</a>
          </div>
      </div>
  </article>`;
}

function renderGridPost(post) {
  return `
    <article class="grid-post">
      <div class="post-meta grid-post-meta">${post.date}</div>
      <a href="${post.link}" class="grid-post-image">
        <div class="post-category">${post.category} <span class="category-triangle"></span></div>
        <img src="${post.image}" alt="${post.title}">
      </a>
      <div class="grid-post-content">
        <h3 class="grid-post-title">${post.title}</h3>
        <p class="grid-post-summary">${post.summary}</p>
        <a href="${post.link}" class="read-button grid-post-button">Read</a>
      </div>
    </article>
  `;
}

// Single post template rendering
function renderSinglePost(post) {
  return `
  <section class="single-post">
    <div class="single-post-image-container">
      <img src="${post.image}" alt="${post.title}" class="single-post-image">
      <div class="post-category">${post.category}</div>
    </div>
    <div class="single-post-meta">
      <span class="meta-item meta-left">${post.readTime}</span>
      <span class="meta-item meta-center">${post.date}</span>
      <span class="meta-item meta-right">${post.viewedTimes}</span>
    </div>
    <h1 class="single-post-title">${post.title}</h1>
    <div id="post-content" class="single-post-content loading-content"></div>
    
    <div class="additional-posts-grid">
      <h2>Read More:</h2>
      <div class="additional-grid">
        ${(() => {
          const group1Titles = [
            "Why Losing My First Model Turned Out Amazing",
            "What I Learned About Sales in My Experience as an Owner of an OnlyFans Management Company",
            "Always Start Early with Recruiting Models",
            "How I Identify Scammers When Searching for Knowledge"
          ];
          const group2Titles = [
            "From Panic Calls to Power Plays: My Journey to Building a Foolproof OnlyFans Agency",
            "Chatting: Why Sales Is the True Money-Maker in OnlyFans Management",
            "Lessons from Losing My Valuable OnlyFans Creators: The 10 Mistakes I'll Always Try To Avoid",
            "Why Did I Choose the OnlyFans Management Business?"
          ];
          const recommendedSetA = [
            "Chatting: Why Sales Is the True Money-Maker in OnlyFans Management",
            "Lessons from Losing My Valuable OnlyFans Creators: The 10 Mistakes I'll Always Try To Avoid",
            "Why Did I Choose the OnlyFans Management Business?"
          ];
          const recommendedSetB = [
            "What I Learned About Sales in My Experience as an Owner of an OnlyFans Management Company",
            "Always Start Early with Recruiting Models",
            "How I Identify Scammers When Searching for Knowledge"
          ];
          let recommendations = [];
          if (group1Titles.includes(post.title)) {
            recommendations = blogPosts.filter(p => recommendedSetA.includes(p.title));
          } else if (group2Titles.includes(post.title)) {
            recommendations = blogPosts.filter(p => recommendedSetB.includes(p.title));
          }
          return recommendations.slice(0, 3).map(p => renderGridPost(p)).join('');
        })()}
      </div>
    </div>
  </section>`;
}

// Load external content after DOM insertion
function loadExternalContent(container, contentUrl) {
  // Confirm container is valid
  if (!container) {
    console.warn("loadExternalContent called but container is null/undefined");
    return;
  }

  // Show loading state
  container.innerHTML = `
    <div class="loading-indicator">
      <div class="loader"></div>
      <p>Loading content...</p>
    </div>`;
  container.classList.add('loading-content');

  console.log(`Fetching external content from: ${contentUrl}`);

  fetch(contentUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      console.log("Fetched external content successfully");
      container.innerHTML = html;
      container.classList.remove('loading-content');
      container.classList.add('loaded-content');
    })
    .catch(error => {
      console.error('Content load failed:', error);
      container.innerHTML = `
        <div class="error-message">
          <p>Failed to load content: ${error.message}</p>
          <button class="retry-button">Retry</button>
        </div>`;
      container.classList.remove('loading-content');

      const retryBtn = container.querySelector('.retry-button');
      if (retryBtn) {
        retryBtn.onclick = () => {
          loadExternalContent(container, contentUrl);
        };
      }
    });
}

// Toggle hero section visibility
function toggleHeroVisibility(category) {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.display = (category === 'all' ? 'block' : 'none');
  }
}

// Blog post filtering system
function filterPosts(category) {
  const postsContainer = document.querySelector('.posts-container');
  const bigPostsContainer = document.querySelector('.big-posts');
  const gridPostsContainer = document.querySelector('.grid-posts-container');
  if (!postsContainer || !bigPostsContainer || !gridPostsContainer) return;

  toggleHeroVisibility(category);
  postsContainer.classList.add('fade-animation');

  setTimeout(() => {
    const isAll = (category === 'all');
    const filteredPosts = isAll
      ? blogPosts
      : blogPosts.filter(post => post.category.toLowerCase() === category);

    let bigPostsHTML = '';
    let gridPostsHTML = '';

    filteredPosts.forEach((post, index) => {
      if (isAll && index < 2) {
        bigPostsHTML += renderBigPost(post, index);
      } else {
        gridPostsHTML += renderGridPost(post);
      }
    });

    bigPostsContainer.innerHTML = bigPostsHTML;
    gridPostsContainer.innerHTML = gridPostsHTML;
    postsContainer.classList.remove('fade-animation');
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired in single.html");

  // Single post logic
  const singlePostContainer = document.querySelector('.single-post');
  if (singlePostContainer) {
    const postId = new URLSearchParams(window.location.search).get('postId');
    const post = blogPosts[postId];
    if (post) {
      singlePostContainer.innerHTML = renderSinglePost(post);
      const postContentEl = document.getElementById('post-content');
      if (postContentEl) {
        console.log("post-content element found. Content URL:", post.contentUrl);
        setTimeout(() => loadExternalContent(postContentEl, post.contentUrl), 0);
      } else {
        console.error("Error: #post-content element not found.");
      }
    } else {
      console.error("Error: Post not found for postId", postId);
    }
  }

  // Homepage logic
  const bigPostsContainer = document.querySelector('.big-posts');
  const gridPostsContainer = document.querySelector('.grid-posts-container');
  if (bigPostsContainer && gridPostsContainer && !singlePostContainer) {
    console.log("Rendering posts for homepage or category page...");
    bigPostsContainer.innerHTML = blogPosts.slice(0, 2)
      .map((post, index) => renderPost(post, index))
      .join('');
    gridPostsContainer.innerHTML = blogPosts.slice(2)
      .map(post => renderPost(post))
      .join('');
  }

  // Category filter links
  document.querySelectorAll('.nav-link[data-category], .footer-link[data-category]')
    .forEach(link => {
      link.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category.toLowerCase();
        const isFooterLink = e.currentTarget.classList.contains('footer-link');

        if (category === 'about') {
          if (isFooterLink) {
            window.location.href = 'about.html';
          } else {
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }

        if (category === 'home') {
          window.location.href = 'index.html';
          return;
        }

        window.history.pushState({}, '', `index.html?category=${category}`);
        filterPosts(category);
      });
    });

  // Check for initial URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  if (initialCategory) {
    filterPosts(initialCategory);
  }

  // Mobile menu toggle functionality
  const menuButton = document.querySelector('.menu-button');
  const mainNav = document.querySelector('.main-nav');
  const closeButton = document.querySelector('.menu-close');

  console.log("menuButton:", menuButton);
  console.log("mainNav:", mainNav);
  console.log("closeButton:", closeButton);

  if (menuButton && mainNav) {
    menuButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Menu button clicked on about.html");
      mainNav.classList.toggle('active');
    });

    if (closeButton) {
      closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Close button clicked on about.html");
        mainNav.classList.remove('active');
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.main-nav') && !e.target.closest('.menu-button')) {
        mainNav.classList.remove('active');
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }
    });

    // Close menu when any nav link is clicked
    document.querySelectorAll('.main-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }
});
