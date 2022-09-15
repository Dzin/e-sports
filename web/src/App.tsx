import { useEffect, useState } from 'react';
import GameCard from './components/GameCard';
import CreateAdCard from './components/CreateAdCard';
import Input from './components/Input';

import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css'
import logo from './assets/logo-nlw-esports.svg'
import { GameController } from 'phosphor-react';

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-5">
      <img className="mb-20" src={logo} alt="eSports - NLW" />

      <h1 className="text-6xl text-white font-black mb-16">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mb-8">
        {
          games.map(game => (
            <GameCard
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              ads={game._count.ads}
            />
          ))
        }
      </div>

      <Dialog.Root>
        <CreateAdCard />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
          <Dialog.Content className="w-[480px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2634] py-8 px-10 text-white rounded-lg shadow-black/25">
            <Dialog.Title className="mb-8 text-2xl font-black">Publique seu anúncio</Dialog.Title>
            <form className="mb-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser 0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input
                    id="discord"
                    type="text"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      D
                    </button>
                    <button
                      title="Segunda"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title="Terça"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      T
                    </button>
                    <button
                      title="Quarta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Quinta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Sexta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title="Sábado"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="name">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-6">
                    <Input
                      id="hourStart"
                      type="time"
                      placeholder="De" />
                    <Input
                      id="hourEnd"
                      type="time"
                      placeholder="Até"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-sm">
                <input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md">Cancelar</Dialog.Close>
                <button
                  type="submit"
                  className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md flex items-center gap-3"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
                
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
