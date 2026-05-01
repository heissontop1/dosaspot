import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-orange-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
              DS
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dosa Spot</h1>
              <p className="text-orange-200 text-sm">Authentic South Indian Cuisine</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#menu" className="hover:text-orange-300 transition">Menu</a>
            <a href="#reviews" className="hover:text-orange-300 transition">Reviews</a>
            <a href="#location" className="hover:text-orange-300 transition">Visit Us</a>
            <a href="#contact" className="hover:text-orange-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1 bg-orange-500/30 rounded-full text-orange-200 text-sm">
            🌿 100% Vegetarian
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Crispy Dosas &<br />South Indian Delights
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            Serving authentic, flavorful South Indian vegetarian cuisine since 2010.
            Handcrafted dosas, bondas, and more made fresh daily.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#menu" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              View Menu
            </a>
            <a href="#location" className="border-2 border-white hover:bg-white hover:text-orange-900 text-white px-8 py-3 rounded-lg font-semibold transition">
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-8 border-b border-orange-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600">14+</div>
            <div className="text-gray-600 text-sm">Years of Service</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">4.6★</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">50+</div>
            <div className="text-gray-600 text-sm">Menu Items</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">500+</div>
            <div className="text-gray-600 text-sm">Happy Reviews</div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold">OUR SPECIALTIES</span>
            <h3 className="text-4xl font-bold mt-2 text-gray-900">Featured Dishes</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Butter Masala Dosa', desc: 'Crispy dosa with rich butter and spiced potato filling', price: '₹80', rating: '5.0', image: '🫓' },
              { name: 'Tawa Bonda', desc: 'Crispy fried lentil dumplings, perfect monsoon snack', price: '₹60', rating: '4.9', image: '🍩' },
              { name: 'Paneer Dosa', desc: 'Dosa loaded with tender paneer and aromatic spices', price: '₹90', rating: '4.8', image: '🫓' },
              { name: 'Rava Dosa', desc: 'Semolina dosa with cumin and curry leaves', price: '₹70', rating: '4.7', image: '🥞' },
              { name: 'Idli Sambar', desc: 'Soft steamed rice cakes with lentil soup', price: '₹50', rating: '4.6', image: '🍚' },
              { name: 'Vada Sambar', desc: 'Crispy lentil fritters with sambar and chutneys', price: '₹55', rating: '4.8', image: '🍩' },
            ].map((dish) => (
              <div key={dish.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-orange-100">
                <div className="text-5xl mb-4">{dish.image}</div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{dish.name}</h4>
                  <span className="text-orange-600 font-semibold">{dish.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{dish.desc}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span className="text-orange-500">★</span>
                  <span>{dish.rating}</span>
                  <span className="mx-2">•</span>
                  <span>Vegetarian</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-6 bg-orange-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold">TESTIMONIALS</span>
            <h3 className="text-4xl font-bold mt-2 text-gray-900">What Our Customers Say</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Sharath Chandra', rating: 5, text: 'Beautiful Dosa Spot! Very nice food is testy. Good place, wow yummy 😋', date: '2 years ago' },
              { name: 'Jakaram Preetham', rating: 5, text: 'Food was amazing mainly the tawa bonda. Highly recommended!', date: '1 year ago' },
              { name: 'Ahmad Raza Chishti', rating: 5, text: 'Great taste! The dosas are crispy and authentic. Must visit!', date: '2 years ago' },
              { name: 'Bro Lol', rating: 5, text: 'Crispy dosa - the best in town. Will definitely come back!', date: '8 months ago' },
              { name: 'indudhar nayudu', rating: 4, text: 'Tawa Bonda and Butter Dosa are must-haves. Good place for breakfast.', date: '1 year ago' },
              { name: 'Shivang Mishra', rating: 5, text: 'Highly recommend for vegetarians. Amazing flavors!', date: '2 months ago' },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500">★</span>
                  ))}
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-orange-600 font-semibold">FIND US</span>
              <h3 className="text-4xl font-bold mt-2 text-gray-900 mb-6">Visit Dosa Spot</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    📍 
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Food Street, Near City Center<br />Bengaluru, Karnataka 560001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    🕐
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-gray-600">Monday - Sunday<br />7:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p className="text-gray-600">+91 98765 43210<br />hello@dosaspot.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 rounded-2xl p-8 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600 text-center mb-4">Find us on Google Maps</p>
              <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Taste the Best Dosa?</h3>
          <p className="text-orange-100 mb-6">Visit us today for an authentic South Indian breakfast experience</p>
          <a href="#location" className="inline-block bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition">
            Find Us Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                DS
              </div>
              <div>
                <div className="text-white font-bold">Dosa Spot</div>
                <div className="text-sm">Authentic South Indian Cuisine</div>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2024 Dosa Spot. All rights reserved. Made with ❤️ in Bengaluru</p>
          </div>
        </div>
      </footer>
    </div>
  )
}