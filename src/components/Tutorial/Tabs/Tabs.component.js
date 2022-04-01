import { TabsContainer } from './Tabs.styles'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Tabs = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const query = searchParams.get('t')

    const handleTutorials = step => {
        if (!step) {
            navigate('/tutorials')
        } else {
            navigate(`/tutorials?t=${step}`)
        }
    }

    return (
        <TabsContainer>
            <li data-testid='tab-1' className={!query ? 'active' : null} onClick={() => handleTutorials(undefined)} />
            <li data-testid='tab-2' className={query === 'camera' ? 'active' : null} onClick={() => handleTutorials('camera')} />
            <li data-testid='tab-3' className={query === 'remote-control' ? 'active' : null} onClick={() => handleTutorials('remote-control')} />
        </TabsContainer>
    )
}

export default Tabs
