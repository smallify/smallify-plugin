import { PluginCallback } from 'smallify'
import { PluginMeta } from './types/plugin'

declare function fp (fn: PluginCallback, opts?: PluginMeta)

export = fp
