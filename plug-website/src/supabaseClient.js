import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sznkebihiwqlamtojtaz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bmtlYmloaXdxbGFtdG9qdGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3MzQ2MzMsImV4cCI6MTk4NDMxMDYzM30.MfytwFGHvOEipZfqm4zaWJnYR4leZIA4xU2pf043wXY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)