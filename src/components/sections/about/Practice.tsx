export default function PracticeWithUs() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-20 bg-white font-serif text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Practice With Us
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed mb-6">
            Discover contemplative wisdom and practices that are easy to understand and apply to your everyday life.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Contemplation is the practice of being fully present—in heart, mind, and body—to <em>what is</em> in a way that deepens awareness, encourages oneness, and strengthens compassion.
            A committed daily contemplative practice doesn’t have to be long or complex—it simply needs to allow deep listening to open your heart to love.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            Discover ways to embody the contemplative life with this collection of practices that help us align actions and values, re-engage with our True Self, and show up in service to the world.
          </p>
        </div>

        {/* Featured Practice Box */}
        <div className="bg-amber-50 px-6 sm:px-10 py-10 rounded-md shadow-sm flex flex-col md:flex-row items-start gap-8">
          {/* Optional image or left content can go here */}

          <div className="md:pl-10">
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">Featured Practice</p>
            <h3 className="text-2xl sm:text-3xl italic">
              <span className="not-italic">I </span>
              <em>Love You</em> <span className="not-italic">Prayer (5:41)</span>
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-800">
              Christian meditation shifts us from ego to oneness, learning to see God in everyone and everything—including in ourselves.
              Recorded in 2022 at the Living School Symposium, CAC faculty James Finley, Ph.D., invites us to slow down and listen for God’s silent <em>I love you</em> in each breath.
              Return to this meditation anytime you feel called to surrender to Love with childlike sincerity.
            </p>
          </div>
        </div>

        {/* Title section above the list */}
<div className="mt-20">
  <h2 className="text-2xl sm:text-3xl font-serif font-medium mb-4">
    Explore Our Collection of Contemplative Practices
  </h2>
  <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
    Contemplation gradually rewires our brains to meet and respond to reality as it is, without judgment or comparison.
    <a href="/contemplative-practices" className="underline text-gray-900 hover:text-emerald-700 font-medium">
      There are many ways to practice contemplation
    </a>
    , from chanting to breath work, sitting in silence or moving with intention. We hope you will use these resources
    to discover ways to hold everything—both joy and sorrow—together in love.
  </p>
</div>

{/* Practice entries */}
<div className="mt-16 space-y-12 text-gray-900 font-serif">

  {/* Practice Item 1 */}
  <div className="md:ml-auto md:w-2/3">
    <h3 className="text-xl sm:text-2xl font-medium mb-2">
      Divine Feminine Blessing <span className="text-base text-gray-600">(3:31)</span>
    </h3>
    <p className="text-base sm:text-lg leading-relaxed text-gray-800">
      Recorded in 2022 by author and teacher Mirabai Starr, the Divine Feminine Blessing invites us to discover breath
      as an inner pathway to connection with the indwelling presence of the divine feminine. Focus on our breathing
      creates deeper awareness of ourselves, while also evoking the intimacy and presence of Spirit. Return to this
      practice whenever you yearn for guidance from our fierce and tender mother wisdom.
    </p>
  </div>

  {/* Practice Item 2 */}
  <div className="md:ml-auto md:w-2/3">
    <h3 className="text-xl sm:text-2xl font-medium mb-2">
      Litany of the Holy Spirit <span className="italic text-base text-gray-600">(12:32)</span>
    </h3>
    <p className="text-base sm:text-lg leading-relaxed text-gray-800">
      This litany invites you to call upon the many dimensions of the Holy Spirit, invoking guidance, strength,
      compassion, and love in your contemplative life. Let it become part of your daily rhythm or return to it
      anytime your spirit needs renewing.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}
