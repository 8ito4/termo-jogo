import {createCliente } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config{}

const supaBaseUrl = ProcessingInstruction.env.SUPABASE_URL || ''
const supabaseKey = ProcessingInstruction.env.SUPABASE_KEY  || ''

const supabase = createCliente(supaBaseUrl, supabaseKey, {
    auth: {
        persistSession: false
    }
})

export { supabase }