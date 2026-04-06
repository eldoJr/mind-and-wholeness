const ERROR_MAP: Record<string, string> = {
  'Invalid login credentials': 'The email or password you entered is incorrect. Please try again.',
  'Email not confirmed': 'Please check your inbox and confirm your email before signing in.',
  'User already registered': 'An account with this email already exists. Try signing in instead.',
  'Password should be at least 6 characters': 'Your password must be at least 6 characters long.',
  'Email rate limit exceeded': 'Too many attempts. Please wait a few minutes and try again.',
  'For security purposes, you can only request this after': 'Too many attempts. Please wait a moment before trying again.',
  'Signups not allowed for this instance': 'Registration is currently unavailable. Please try again later.',
  'User not found': 'No account found with this email address.',
  'Invalid email': 'Please enter a valid email address.',
  'Auth session missing': 'Your session has expired. Please sign in again.',
  'Token has expired or is invalid': 'Your session has expired. Please sign in again.',
};

const NETWORK_PATTERNS = [
  'Failed to fetch',
  'NetworkError',
  'network',
  'ECONNREFUSED',
  'ERR_CONNECTION',
  'timeout',
  'abort',
];

export function getFriendlyAuthError(raw: string): string {
  // Exact match
  if (ERROR_MAP[raw]) return ERROR_MAP[raw];

  // Partial match (Supabase sometimes wraps messages)
  for (const [key, friendly] of Object.entries(ERROR_MAP)) {
    if (raw.toLowerCase().includes(key.toLowerCase())) return friendly;
  }

  // Network / connectivity errors
  if (NETWORK_PATTERNS.some((p) => raw.toLowerCase().includes(p.toLowerCase()))) {
    return 'Unable to connect. Please check your internet connection and try again.';
  }

  // Rate limiting
  if (raw.toLowerCase().includes('rate') || raw.toLowerCase().includes('too many')) {
    return 'Too many attempts. Please wait a few minutes and try again.';
  }

  // Fallback — never show raw technical errors
  return 'Something went wrong. Please try again later.';
}
