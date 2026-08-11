import React from 'react'

export function ArticleSectionItem({ section, showDivider = true }) {
  if (!section) return null

  return (
    <div className="mb-8">
      {/* Main Section H2 Heading */}
      {section.title && (
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
          {section.title}
        </h2>
      )}

      {/* Intro Paragraphs */}
      {section.paragraphs && section.paragraphs.length > 0 && (
        <div className="space-y-4 mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          {section.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}

      {/* Subheading (H3) if available */}
      {(section.listTitle || section.subHeading) && (
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">
          {section.listTitle || section.subHeading}
        </h3>
      )}

      {/* Bullet List */}
      {section.listItems && section.listItems.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed mb-6 pl-2">
          {section.listItems.map((item, idx) => (
            <li key={idx} className="marker:text-gray-700">
              <span className="ml-1">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Nested SubSections (e.g. Kasauli, Solan) */}
      {section.subSections && section.subSections.length > 0 && (
        <div className="space-y-6 my-6">
          {section.subSections.map((sub, idx) => (
            <div key={idx}>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {sub.title}
              </h3>
              {sub.paragraphs && (
                <div className="space-y-4 mb-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  {sub.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}
              {sub.listItems && (
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed mb-4 pl-2">
                  {sub.listItems.map((item, iIdx) => (
                    <li key={iIdx} className="marker:text-gray-700">
                      <span className="ml-1">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Seasons list (H3 & text) */}
      {section.seasons && section.seasons.length > 0 && (
        <div className="space-y-4 my-6">
          {section.seasons.map((season, sIdx) => (
            <div key={sIdx}>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {season.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                {season.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Closing Paragraph */}
      {section.closingText && (
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
          {section.closingText}
        </p>
      )}

      {/* Divider */}
      {showDivider && <hr className="border-t border-gray-200 my-8" />}
    </div>
  )
}

export default ArticleSectionItem
