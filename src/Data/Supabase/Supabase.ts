
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gffnaweghjwrsoeifuec.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZm5hd2VnaGp3cnNvZWlmdWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MjY5MDMsImV4cCI6MjAzMDMwMjkwM30.x_RwZu8aNfxnoY_UM6Sgp1pHuvqUfxzBeGf63SOD_84'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase