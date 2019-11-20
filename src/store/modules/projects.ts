
import {
  VuexModule, Module, Action, Mutation, getModule, MutationAction
} from 'vuex-module-decorators'
import store from '@/store'
import { camelCase, mapKeys } from 'lodash'

export interface ILink {
  rel: string,
  href: string
}

export interface IAddress {
  zip: string,
  city: string,
  street: string,
  country: string,
  additionalInformation: string,
  longitude: number,
  latitude: number,
}

export interface IProject {
  slug: string,
  title: string,
  summary: string,
  reviewStatus: number,
  organization: string,
  categoryTitle: string,
  createdAt: Date,
  endsAt: Date,
  coverPhoto: string,
  address: IAddress,
  balanceTotalInCoins: number,
  balanceTotalInCurrency: string,
  balanceTotalInPercent: number,
  goalInCoins: number,
  goalInCurrency: string
  links: ILink[]
}

export interface IProjectState {
  projects: IProject[]
}

@Module({ dynamic: true, store, name: 'projects' })
class ProjectModule extends VuexModule implements IProjectState {
  projects = [] as IProject[]

  @MutationAction({ mutate: ['projects'] })
  async fetchProjects () {
    const res = await fetch('http://127.0.0.1:8000/api/v4/projects/')
      .then(res => { console.log('response: ', res); return res.json() })
      .catch((e) => console.log('error:', e))
    return { projects: res.results.map((project: any) => mapKeys(project, (v: IProject, k: string) => camelCase(k))) }
  }
  // @Mutation
  // ADD_TODO_ITEM(todoItem: IProject): void {
  //   this.todos.push(todoItem);
  // }

  // @Action({ commit: 'ADD_TODO_ITEM', rawError: true })
  // addTodoItem(title: string): ITodoItem {
  //   let newId = 1;
  //   if (this.todos.length) {
  //     newId = this.todos.reduce((prev, curr) => (prev.id > curr.id ? prev : curr)).id + 1;
  //   }
  //   return { title, id: newId };
  // }
}

export default getModule(ProjectModule)
