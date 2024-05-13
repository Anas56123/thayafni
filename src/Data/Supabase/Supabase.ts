
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gffnaweghjwrsoeifuec.supabase.co'
const supabaseKey = String(process.env.SUPABASE_API_KEY)
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase