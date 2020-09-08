import { initConfig } from '../src/config'
import { displayState } from '../src/display-state'

initConfig()
displayState({
  'setting': {'content': 'test'},
  'creativeList': {'content': 'test'},
  'creativeEdit': {'content': 'test'},
  'CampaignEdit': {'content': 'test'}
})
