import { supabase } from './superbase'

export const api = {
    async get<T>(table: string, query?: string) {
        let queryBuilder = supabase.from(table).select()

        if (query) {
            queryBuilder = queryBuilder.eq('id', query)
        }

        const { data, error } = await queryBuilder

        if (error) throw error
        return data as T
    },

    async post<T>(table: string, data: Record<string, unknown>) {
        const { data: result, error } = await supabase
            .from(table)
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return result as T
    },

    async put<T>(table: string, id: string, data: Record<string, unknown>) {
        const { data: result, error } = await supabase
            .from(table)
            .insert(data)
            .eq('id', id)
            .select()
            .single()

        if (error) throw error
        return result as T
    },

    async delete(table: string, id: string) {
        const { error } = await supabase
            .from(table)
            .delete()
            .eq('id', id)

        if (error) throw error
    },

    async uploadFile(bucket: string, path: string, file: File) {
        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(path, file)

        if (error) throw error
        return data
    },

    getFileUrl(bucket: string, path: string) {
        const { data } = supabase.storage
            .from(bucket)
            .getPublicUrl(path)

        return data.publicUrl
    }
}