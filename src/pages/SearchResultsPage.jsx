import React, { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const searchableIndex = [
  {
    id: 'amber-moon',
    title: 'Amber Moon',
    url: '/ambermoon',
    author: 'wunderhomes',
    date: 'Jun 4, 2026',
    category: 'Villas & Stays',
    keywords: 'amber moon haripur solan himachal pradesh villa pool table games room 3 bedrooms 8-10 guests 11 guests wifi kitchen air conditioner mountain view vacation rental homestay kumarhatti',
    excerpt: 'Amber Moon – Your Private Luxury Holiday Rental Nestled in a peaceful and scenic setting, Amber Moon is an exclusive homestay designed for families, friends, and small groups seeking comfort, privacy, pool table, games room, and modern amenities.',
  },
  {
    id: 'white-rose',
    title: 'White Rose',
    url: '/whiterose',
    author: 'wunderhomes',
    date: 'Jun 4, 2026',
    category: 'Villas & Stays',
    keywords: 'white rose the white rose dagshai village anhech himachal pradesh villa 4 bedrooms 12 guests mountain view wifi kitchen parking lawn family group getaway luxury homestay',
    excerpt: 'The White Rose Nestled amidst the serene landscapes of Dagshai, Himachal Pradesh, The White Rose Villa is a spacious and elegant mountain retreat designed for families, friends, and group getaways with 4 bedrooms for up to 12 guests.',
  },
  {
    id: 'blog-4',
    title: 'Why Choose a Vacation Rental Over a Hotel in Himachal?',
    url: '/blog/vacation-rental-vs-hotel-in-himachal/',
    image: 'https://www.wunderhomes.in/wp-content/uploads/2025/11/Untitled-design-2025-11-05T105959.980.png',
    author: 'wunderhomes',
    date: 'Dec 13, 2025',
    category: 'Travel Guides',
    keywords: 'vacation rental hotel vs villa himachal pradesh home cooked meals privacy space family group stay wunder homes resort',
    excerpt: 'Your mountain trip deserves more than just a standard room. Himachal Pradesh has a way of slowing life down. The crisp mountain air, winding roads, pine forests, and peaceful sunsets make it a destination people return to again and again...',
  },
  {
    id: 'blog-1',
    title: 'Best Things to Do Near Kumarhatti and Kasauli During Your Stay',
    url: '/blog/best-things-to-do-near-kumarhatti-and-kasauli-during-your-stay/',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Travel Guides',
    keywords: 'kumarhatti kasauli things to do nature walks sunset point gilbert trail mall road heritage attractions himachal travel guide',
    excerpt: 'Looking for the best things to do near Kumarhatti and Kasauli during your stay? Explore top attractions, nature walks, scenic views, and local experiences when staying at Wunder Homes...',
  },
  {
    id: 'blog-2',
    title: 'Why Kumarhatti is the Perfect Weekend Getaway in Himachal Pradesh',
    url: '/blog/why-kumarhatti-is-the-perfect-weekend-getaway-in-himachal-pradesh/',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Travel Guides',
    keywords: 'kumarhatti weekend getaway himachal pradesh delhi trip chandigarh road trip hill station weather mountain stay',
    excerpt: 'Discover why Kumarhatti is the perfect weekend getaway in Himachal Pradesh. Enjoy peaceful hill views, pleasant weather, easy accessibility, and luxury homestays...',
  },
  {
    id: 'blog-3',
    title: 'Wake Up to Mountain Views: The Benefits of Staying in a Hill View Villa',
    url: '/blog/wake-up-to-mountain-views-the-benefits-of-staying-in-a-hill-view-villa/',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Travel Guides',
    keywords: 'mountain views hill view villa benefits fresh air relaxation balcony view workation nature serenity retreat',
    excerpt: 'Experience the benefits of staying in a hill view villa in Himachal. Wake up to breathtaking mountain views, fresh air, peaceful surroundings, and private luxury amenities...',
  },
  {
    id: 'request-quote',
    title: 'Request a Quote',
    url: '/request-a-quote',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Contact & Inquiry',
    keywords: 'request a quote quote contact price stay quote custom pricing phone 9350584611 email info@wunderhomes.in address location map inquiry form',
    excerpt: 'Complete the form below to receive your custom stay quote for Wunder Homes luxury holiday villas in Himachal Pradesh.',
  },
  {
    id: 'booking-page',
    title: 'Booking Page',
    url: '/booking',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Reservations',
    keywords: 'booking page book now reserve villa checkin checkout dates guests rooms rate plan ep plan cp plan prices vacation rental booking payment',
    excerpt: 'Book your stay at Wunder Homes. Select check-in date, check-out date, guests, rooms, and rate plans with instant pricing.',
  },
  {
    id: 'about-us',
    title: 'About Us',
    url: '/about-us',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Company',
    keywords: 'about us wunder homes hospitality team luxury homestays holiday rentals himachal retreats guest experience founder story',
    excerpt: 'Learn more about Wunder Homes, our luxury holiday rentals in Himachal Pradesh, and our commitment to guest comfort, privacy, and authentic hospitality.',
  },
  {
    id: 'home-page',
    title: 'Home',
    url: '/',
    author: 'wunderhomes',
    date: 'Oct 29, 2025',
    category: 'Homepage',
    keywords: 'home homepage wunder homes introducing luxury villas homes near you available this weekend villas by experience popular facilities customer reviews list your villa',
    excerpt: 'Introducing Wunder Homes Search for: Book Now Request a Quote Homes near you Amber Moon Kumarhatti, Himanchal Pradesh The White Rose Himanchal Pradesh Experience calm and comfort...',
  },
  {
    id: 'blog-index',
    title: 'Wunder Homes Blog',
    url: '/blog',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Blog',
    keywords: 'blog travel guides articles himachal guides mountain stays news updates',
    excerpt: 'Explore our latest travel guides, holiday tips, and mountain retreat insights on the Wunder Homes blog.',
  },
  {
    id: 'booking-confirm',
    title: 'Booking Confirmation Page',
    url: '/booking',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Reservations',
    keywords: 'booking confirmation reservation details receipt',
    excerpt: '[mphb_booking_confirmation] Reservation confirmation details for Wunder Homes holiday stays.',
  },
  {
    id: 'villas-listing',
    title: 'Villas Listing Page',
    url: '/ambermoon',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Villas',
    keywords: 'villas listing page properties stays holiday rentals',
    excerpt: 'Browse flagship mountain retreats including Amber Moon and The White Rose in Himachal Pradesh.',
  },
  {
    id: 'search-page',
    title: 'Search Page',
    url: '/search',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Search',
    keywords: 'search page query results',
    excerpt: 'Search page for Wunder Homes properties, blog posts, and vacation rentals.',
  },
  {
    id: 'gallery',
    title: 'Gallery',
    url: '/whiterose',
    author: 'wunderhomes',
    date: 'Jun 22, 2026',
    category: 'Photos',
    keywords: 'gallery photos pictures images villa view living room bedroom kitchen pool',
    excerpt: 'High-resolution photo gallery showcasing luxury living rooms, bedrooms, and hill views.',
  },
]

const recentPostsList = [
  {
    title: 'Best Things to Do Near Kumarhatti and Kasauli During Your Stay',
    url: '/blog/best-things-to-do-near-kumarhatti-and-kasauli-during-your-stay/',
  },
  {
    title: 'Why Kumarhatti is the Perfect Weekend Getaway in Himachal Pradesh',
    url: '/blog/why-kumarhatti-is-the-perfect-weekend-getaway-in-himachal-pradesh/',
  },
  {
    title: 'Wake Up to Mountain Views: The Benefits of Staying in a Hill View Villa',
    url: '/blog/wake-up-to-mountain-views-the-benefits-of-staying-in-a-hill-view-villa/',
  },
  {
    title: 'Why Choose a Vacation Rental Over a Hotel in Himachal?',
    url: '/blog/vacation-rental-vs-hotel-in-himachal/',
  },
]

export function SearchResultsPage() {
  const [query, setQuery] = useState('')
  const [sidebarInput, setSidebarInput] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    // Extract ?q= from URL parameters
    const params = new URLSearchParams(window.location.search)
    const qParam = params.get('q') || ''
    setQuery(qParam)
    setSidebarInput(qParam)
  }, [])

  // Comprehensive site-wide search filtering logic
  const filteredResults = searchableIndex.filter((item) => {
    if (!query || query.trim() === '') {
      // Empty search matches top default entries matching reference
      return ['booking-confirm', 'villas-listing', 'search-page', 'booking-page', 'gallery'].includes(item.id)
    }
    
    const terms = query.toLowerCase().trim().split(/\s+/)
    const fullContent = `${item.title} ${item.excerpt} ${item.keywords || ''} ${item.category || ''} ${item.url}`.toLowerCase()
    
    // Returns true if any of the typed terms match the item
    return terms.some(term => fullContent.includes(term))
  })

  const handleSidebarSearchSubmit = (e) => {
    e.preventDefault()
    window.location.href = `/search?q=${encodeURIComponent(sidebarInput)}`
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Results Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Search Heading matching Wunder Homes Divi layout */}
            <div className="pb-3 border-b border-stone-200">
              <h1 className="text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
                You searched for {query ? `"${query}"` : ''}
              </h1>
            </div>

            {/* Search Result Items List */}
            {filteredResults.length > 0 ? (
              <div className="space-y-8">
                {filteredResults.map((item) => (
                  <article key={item.id} className="pb-8 border-b border-stone-200/80">
                    
                    {/* Featured Image if present */}
                    {item.image && (
                      <a href={item.url} className="block mb-4 overflow-hidden rounded-xs max-w-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full aspect-[16/10] object-cover hover:opacity-95 transition-opacity"
                        />
                      </a>
                    )}

                    <h2 className="text-xl sm:text-2xl font-normal text-stone-900 mb-2 leading-tight">
                      <a
                        href={item.url}
                        className="hover:text-[#641f54] transition-colors"
                      >
                        {item.title}
                      </a>
                    </h2>

                    <p className="text-xs text-stone-500 mb-3">
                      by <span className="text-stone-700 font-medium">{item.author}</span> |{' '}
                      <span className="text-stone-500">{item.date}</span>
                      {item.category && (
                        <>
                          {' '} | <span className="text-[#641f54] hover:underline cursor-pointer">{item.category}</span>
                        </>
                      )}
                    </p>

                    <p className="text-sm text-stone-600 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-8 text-stone-600 space-y-3">
                <p className="text-base font-medium text-stone-800">
                  No Results Found for "{query}"
                </p>
                <p className="text-xs text-stone-500">
                  The term you requested could not be matched. Try searching for keywords like "Amber Moon", "White Rose", "Kumarhatti", "Villa", "Quote", or "Booking".
                </p>
              </div>
            )}

          </div>

          {/* Right Sidebar Column (4 cols) matching reference layout */}
          <aside className="lg:col-span-4 space-y-8 text-left">
            
            {/* Sidebar Search Box Widget */}
            <div className="bg-stone-50/70 border border-stone-200/80 p-5 rounded-xs space-y-3">
              <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                Search
              </label>
              <form onSubmit={handleSidebarSearchSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={sidebarInput}
                  onChange={(e) => setSidebarInput(e.target.value)}
                  placeholder=""
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-xs focus:outline-none focus:border-[#641f54]"
                />
                <button
                  type="submit"
                  className="bg-[#641f54] hover:bg-[#521844] text-white px-4 py-2 text-xs font-semibold rounded-xs transition-colors cursor-pointer shrink-0"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Sidebar Recent Posts Widget */}
            <div className="bg-stone-50/70 border border-stone-200/80 p-5 rounded-xs space-y-4">
              <h2 className="text-base font-semibold text-stone-900 border-b border-stone-200 pb-2">
                Recent Posts
              </h2>
              <ul className="space-y-3 text-xs text-stone-700 font-normal">
                {recentPostsList.map((post, idx) => (
                  <li key={idx} className="pb-2 border-b border-stone-200/60 last:border-none last:pb-0">
                    <a
                      href={post.url}
                      className="hover:text-[#641f54] transition-colors leading-normal block"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SearchResultsPage
