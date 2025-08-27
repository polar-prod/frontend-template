import { supabase } from "@/lib/superbase";

export const auth = {
    async signUp(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })

        if  (error) throw error
        return data
    },

    async signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) throw error
        return data
    },

    async signInWithProvider(provider: 'google' | 'github' | 'apple') {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        })

        if (error) throw error
        return data
    },

    async signOut() {
        const { error } = await supabase.auth.signOut()

        if (error) throw error
    },

    async getCurrentUser() {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (error) throw error
        return user
    },

    async getCurrentSession() {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error
        return session
    },

    async resetPassword(email: string) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/callback`
        })
        if (error) throw error
    },

    async updatePassword(password: string) {
        const { error } = await supabase.auth.updateUser({ password })

        if (error) throw error
    }
}