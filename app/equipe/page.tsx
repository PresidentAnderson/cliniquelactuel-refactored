import type { Metadata } from 'next/date'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notre Équipe Médicale | Clinique l\'Actuel',
  description: 'Rencontrez notre équipe de professionnels de la santé dévoués et expérimentés, engagés à fournir des soins de qualité.',
}

const team = [
  {
    name: 'Dr. Marie Dubois',
    role: 'Médecin Généraliste',
    specialties: ['Médecine Générale', 'Soins Préventifs'],
    bio: 'Plus de 15 ans d\'expérience en médecine générale avec une passion pour les soins préventifs et le bien-être des patients.',
  },
  {
    name: 'Dr. Jean Tremblay',
    role: 'Médecin de Famille',
    specialties: ['Médecine Familiale', 'Pédiatrie'],
    bio: 'Spécialisé en médecine familiale avec un intérêt particulier pour la santé des enfants et des adolescents.',
  },
  {
    name: 'Dr. Sophie Laurent',
    role: 'Médecin Spécialiste',
    specialties: ['Santé Sexuelle', 'Dépistage'],
    bio: 'Experte en santé sexuelle et reproductive, offrant des soins confidentiels et sans jugement.',
  },
  {
    name: 'Dr. Pierre Martin',
    role: 'Médecin Interniste',
    specialties: ['Médecine Interne', 'Maladies Chroniques'],
    bio: 'Spécialisé dans le diagnostic et le traitement des maladies complexes et des conditions chroniques.',
  },
  {
    name: 'Isabelle Roy',
    role: 'Infirmière Praticienne',
    specialties: ['Soins Infirmiers', 'Vaccinations'],
    bio: 'Infirmière praticienne expérimentée offrant des soins complets et des services de vaccination.',
  },
  {
    name: 'Marc Gagnon',
    role: 'Psychologue',
    specialties: ['Santé Mentale', 'Thérapie'],
    bio: 'Psychologue clinicien spécialisé dans la gestion du stress, l\'anxiété et la dépression.',
  },
]

export default function EquipePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-gray-900 mb-6">Notre Équipe Médicale</h1>
            <p className="text-xl text-gray-600">
              Rencontrez les professionnels de la santé dévoués qui constituent le cœur de
              Clinique l'Actuel. Notre équipe multidisciplinaire travaille ensemble pour vous
              offrir des soins exceptionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary-300 transition-all duration-300"
              >
                {/* Photo Placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-sm text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-gray-900 text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Nous nous engageons à fournir des soins de la plus haute qualité.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-2">Compassion</h3>
                <p className="text-gray-600">
                  Nous traitons chaque patient avec empathie et respect.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  Notre équipe travaille ensemble pour votre bien-être.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-gray-900 mb-6">
              Rencontrez Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Prenez rendez-vous dès aujourd'hui et découvrez la différence que des soins
              professionnels et personnalisés peuvent faire.
            </p>
            <Link href="/rendez-vous" className="btn-primary text-lg">
              Prendre Rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
