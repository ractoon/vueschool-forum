import Vue from 'vue'

const makeAppendChildToParentMutation = ({parent, child}) =>
  (state, { childId, parentId }) => {
    const resource = state[parent][parentId]
    if (!resource[child]) {
      Vue.set(resource, child, {})
    }
    Vue.set(resource[child], childId, childId)
  }

export default {
  setItem (state, {item, id, resource}) {
    item['.key'] = id
    Vue.set(state[resource].items, id, item)
  }
}
