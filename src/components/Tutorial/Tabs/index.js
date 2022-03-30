import { TabsContainer } from './styles'
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
            <li className={!query ? 'active' : null} onClick={() => handleTutorials(undefined)} />
            <li className={query === 'camera' ? 'active' : null} onClick={() => handleTutorials('camera')} />
            <li className={query === 'remote-control' ? 'active' : null} onClick={() => handleTutorials('remote-control')} />
        </TabsContainer>
    )
}

export default Tabs
