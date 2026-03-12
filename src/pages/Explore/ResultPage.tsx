import React, { useState } from "react";
import { MapPin, GraduationCap, ChevronRight, Star, Zap, ExternalLink } from "lucide-react";

const regions = [
  { name: 'Punjab Boards', key: 'punjab' },
  { name: 'Sindh Boards', key: 'sindh' },
  { name: 'Khyber Pakhtunkhwa (KPK) Boards', key: 'kpk' },
  { name: 'Balochistan Board', key: 'balochistan' },
  { name: 'Federal Board', key: 'federal' },
  { name: 'Azad Jammu & Kashmir', key: 'ajk' },
];

const boardsByRegion: Record<string, Array<{name: string, url: string}>> = {
  punjab: [
    { name: 'BISE Lahore', url: 'https://biselahore.com' },
    { name: 'BISE Gujranwala', url: 'https://bisegrw.com' },
    { name: 'BISE Rawalpindi', url: 'https://biseralawalpur.edu.pk' },
    { name: 'BISE Faisalabad', url: 'https://bisefsd.edu.pk' },
    { name: 'BISE Sargodha', url: 'https://bisesargodha.edu.pk' },
    { name: 'BISE Multan', url: 'https://bisemultan.edu.pk' },
    { name: 'BISE Sahiwal', url: 'https://bisesahiwal.edu.pk' },
    { name: 'BISE Bahawalpur', url: 'https://bisebwp.edu.pk' },
    { name: 'BISE Dera Ghazi Khan (DG Khan)', url: 'https://bisedgkhan.edu.pk' },
  ],
  sindh: [
    { name: 'BISE Karachi', url: 'https://biek.edu.pk' },
    { name: 'BISE Hyderabad', url: 'https://bisehyderabad.edu.pk' },
    { name: 'BISE Sukkur', url: 'https://bisesukkur.edu.pk' },
    { name: 'BISE Larkana', url: 'https://biselarkana.edu.pk' },
    { name: 'BISE Mirpurkhas', url: 'https://bisemirpurkhas.edu.pk' },
    { name: 'BISE Nawabshah (Shaheed Benazirabad)', url: 'https://bisenawabshah.edu.pk' },
  ],
  kpk: [
    { name: 'BISE Peshawar', url: 'https://bisepeshawar.edu.pk' },
    { name: 'BISE Swat', url: 'https://biseswat.edu.pk' },
    { name: 'BISE Kohat', url: 'https://bisekohat.edu.pk' },
    { name: 'BISE Abbottabad', url: 'https://biseabbottabad.edu.pk' },
    { name: 'BISE Bannu', url: 'https://bisebannu.edu.pk' },
    { name: 'BISE Mardan', url: 'https://bisemardan.edu.pk' },
    { name: 'BISE Malakand', url: 'https://bisemalakand.edu.pk' },
    { name: 'BISE Dera Ismail Khan (DI Khan)', url: 'https://bisedikhan.edu.pk' },
  ],
  balochistan: [
    { name: 'BBISE Quetta (Board of Intermediate & Secondary Education, Quetta)', url: 'https://bbisequetta.edu.pk' },
  ],
  federal: [
    { name: 'FBISE Islamabad (Federal Board of Intermediate & Secondary Education)', url: 'https://fbise.edu.pk' },
  ],
  ajk: [
    { name: 'BISE Mirpur (AJK Board of Intermediate & Secondary Education)', url: 'https://biseajk.edu.pk' },
  ],
};

export const ResultPage = (): JSX.Element => {
  const [step, setStep] = useState<'region' | 'board'>('region');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleBoardClick = (url: string, boardName: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <div className="flex flex-col w-full items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              Result Portal
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Find your board and result with a single click. All Pakistani Boards supported.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
                <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-semibold text-gray-900 dark:text-white">6</span>
                <span className="text-gray-600 dark:text-gray-400">Regions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
                <GraduationCap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-semibold text-gray-900 dark:text-white">25+</span>
                <span className="text-gray-600 dark:text-gray-400">Boards</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900 dark:text-white">4.9</span>
                <span className="text-gray-600 dark:text-gray-400">Rating</span>
              </div>
            </div>
          </div>

          {step === 'region' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {regions.map((region) => (
                <div
                  key={region.key}
                  onClick={() => { setSelectedRegion(region.key); setStep('board'); }}
                  className="group relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-700/50 dark:border-gray-600/50 backdrop-blur-sm overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-12 scale-150" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon and Count */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <MapPin className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 dark:bg-gray-700/50 text-white border border-white/20 dark:border-gray-600/50 shadow-sm transition-all duration-300">
                        {boardsByRegion[region.key].length} Boards
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-grow mb-6">
                      <h3 className="font-bold text-xl lg:text-2xl text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                        {region.name}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-300 leading-relaxed line-clamp-3">
                        Select to view all boards in this region.
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        <span>Explore Boards</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </div>
              ))}
            </div>
          )}

          {step === 'board' && selectedRegion && (
            <div>
              <button
                onClick={() => setStep('region')}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group mb-8"
              >
                <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Regions</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {boardsByRegion[selectedRegion].map((board) => (
                  <div
                    key={board.name}
                    onClick={() => handleBoardClick(board.url, board.name)}
                    className="group relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-700/50 dark:border-gray-600/50 backdrop-blur-sm overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 dark:opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-12 scale-150" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header with Icon and Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          <GraduationCap className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                        
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 dark:bg-gray-700/50 text-white border border-white/20 dark:border-gray-600/50 shadow-sm transition-all duration-300">
                          Board
                        </span>
                      </div>

                      {/* Title and Description */}
                      <div className="flex-grow mb-6">
                        <h3 className="font-bold text-xl lg:text-2xl text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                          {board.name}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-300 leading-relaxed line-clamp-3">
                          Official board for examinations and results.
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                          <span>Visit Official Site</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}; 
