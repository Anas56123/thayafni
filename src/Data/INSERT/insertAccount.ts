import supabase from "../Supabase/Supabase";

export async function insertAccount(obj: object) {
    const { data, error } = await supabase
  .from('Accounts')
  .insert([
    obj
  ])
  .select()
}
