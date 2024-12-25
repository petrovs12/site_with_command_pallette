import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useMatches, KBarResults, ActionImpl } from 'kbar'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { ReactNode } from 'react'
import { ModelViewer } from './components/ModelViewer'

// Pages
const PageOne = () => (
  <div className="page">
    <h1>Page One</h1>
  </div>
)

const PageTwo = () => (
  <div className="page">
    <h1>Page Two</h1>
  </div>
)

const PageThree = () => (
  <div className="page">
    <h1>3D Model Viewer</h1>
    <div className="model-viewer">
      <ModelViewer />
    </div>
  </div>
)

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => 
        typeof item === "string" ? (
          <div style={{ padding: '8px 16px', opacity: 0.5 }}>{item}</div>
        ) : (
          <div
            style={{
              padding: '12px 16px',
              background: active ? 'rgb(0 0 0 / 0.05)' : 'transparent',
              borderLeft: `2px solid ${active ? 'rgb(0 0 0 / 0.1)' : 'transparent'}`,
              cursor: 'pointer',
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  )
}

function App() {
  const navigate = useNavigate()

  const actions = [
    {
      id: 'page1',
      name: 'Go to Page One',
      shortcut: ['g', '1'],
      perform: () => navigate('/'),
    },
    {
      id: 'page2',
      name: 'Go to Page Two',
      shortcut: ['g', '2'],
      perform: () => navigate('/page2'),
    },
    {
      id: 'page3',
      name: 'Go to 3D Viewer',
      shortcut: ['g', '3'],
      perform: () => navigate('/page3'),
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={{ zIndex: 10000 }}>
          <KBarAnimator style={{ maxWidth: '500px', width: '100%', background: 'white', padding: '12px', borderRadius: '8px', boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}>
            <KBarSearch />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      
      <div>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page2" element={<PageTwo />} />
          <Route path="/page3" element={<PageThree />} />
        </Routes>
      </div>
    </KBarProvider>
  )
}

export default App 