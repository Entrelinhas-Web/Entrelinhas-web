import { createClient } from '@supabase/supabase-js';
 
const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
 
const supabase = createClient(API_URL, API_KEY);
 
async function createUser(
    nome: string,
    email: string,
    password: string,
    avatar: string
) {
    const { data: authData, error: authError } =
    await supabase.auth.signUp({
        email,
        password,
    })

    if (authError) throw authError
    if (!authData.user) throw new Error('Usuário não criado')
    
    const { error: dbError } = await supabase
    .from('Usuario')
    .insert({
        auth_id: authData.user.id,
        nome,
        email,
        avatar,
    })

    if (dbError) throw dbError
    return authData.user
}

export async function loginUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) throw error
    return data
}

export async function logOutUser() {
    const { error } = await supabase.auth.signOut()

    if (error) throw error
    return null
}

async function getUsuarioAtual() {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) return null

    const { data: usuario, error } = await supabase
        .from('Usuario')
        .select('id')
        .eq('auth_id', session.user.id)
        .single()

    if (error) throw error
    return usuario.id
}

async function getPerfil() {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) return null

    const { data: usuario, error } = await supabase
        .from('Usuario')
        .select('id, nome, email, avatar')
        .eq('auth_id', session.user.id)
        .single()

    if (error) throw error

    const { data: countDesabafos, error: countError } = await supabase
        .from('Desabafo')
        .select('*', { count: 'exact', head: true })
        .eq('id_usuario', usuario.id)

    if (countError) throw countError

    return {
        ...usuario,
        qtdDesabafos: countDesabafos ?? 0
    }
}

export async function getDesabafos() {
    const id_usuario = await getUsuarioAtual()
    if (!id_usuario) return []

    const { data, error } = await supabase
        .from('Desabafo')
        .select('*')
        .eq('id_usuario', id_usuario)
        .order('created_at', { ascending: false })

    if (error) throw error
    return data
}

export async function createDesabafo(info) {
    const usuario = await getUsuarioAtual()

    const desabafo = { 
        ...info, 
        id_usuario: usuario.id
    }

    const { data: result, error } = await supabase
        .from("Desabafo")
        .insert(desabafo)

    if (error) throw error
    return result
}

export default { createUser, loginUser, logOutUser, getUsuarioAtual, getPerfil, getDesabafos, createDesabafo };