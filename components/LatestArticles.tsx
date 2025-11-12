import Link from 'next/link'

// Mock data - replace with actual data from your CMS or database
const articles = [
  {
    id: 1,
    title: 'L\'Importance des Examens de Santé Réguliers',
    excerpt: 'Découvrez pourquoi les bilans de santé réguliers sont essentiels pour prévenir les maladies et maintenir une vie saine.',
    date: '15 Nov 2025',
    category: 'Prévention',
    href: '/ressources/examens-sante-reguliers',
  },
  {
    id: 2,
    title: 'Vaccinations: Ce Que Vous Devez Savoir',
    excerpt: 'Guide complet sur les vaccinations recommandées pour les adultes et les enfants, incluant les vaccins de voyage.',
    date: '10 Nov 2025',
    category: 'Vaccins',
    href: '/ressources/guide-vaccinations',
  },
  {
    id: 3,
    title: 'Gestion du Stress et Santé Mentale',
    excerpt: 'Conseils pratiques pour gérer le stress quotidien et améliorer votre bien-être mental.',
    date: '5 Nov 2025',
    category: 'Santé Mentale',
    href: '/ressources/gestion-stress',
  },
]

export default function LatestArticles() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="heading-lg text-gray-900 mb-4">Ressources Santé</h2>
            <p className="text-lg text-gray-600">
              Articles et conseils pour vous aider à prendre soin de votre santé
            </p>
          </div>
          <Link href="/ressources" className="hidden md:inline-flex btn-secondary">
            Voir Tout
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary-300 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg className="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="heading-sm text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                  Lire la suite
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-8 md:hidden">
          <Link href="/ressources" className="btn-secondary">
            Voir Toutes les Ressources
          </Link>
        </div>
      </div>
    </section>
  )
}
