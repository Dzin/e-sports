interface IGameCardProps {
    bannerUrl: string;
    title: string;
    ads: number;
}

function GameCard({ bannerUrl, title, ads }: IGameCardProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src={bannerUrl} alt="" />

            <div className="w-full py-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{title}</strong>
                <span className="text-sm text-zinc-300 block">{ads} anúncio{ads > 0 ? 's' : ''}</span>
            </div>
        </a>
    )
}

export default GameCard