import { showError } from '@/utils/toasts/showError';
import { errorToast } from '@/utils/toasts/toasts'
import type { Disc } from '@/views/HomeView.vue'
import type { Ref } from 'vue'

const BASE_URL = 'http://localhost:3000'

export const fetchDisc = async (id: string, errorMessage: Ref<string | null>): Promise<Disc | null> => {
  try {
    const response = await fetch(`${BASE_URL}/discs/${id}`);
    if (!response.ok) {
      errorMessage.value = `Disc ID: ${id} could not be retrieved. ${response.status}: ${response.statusText}`;
      setTimeout(() => errorToast(errorMessage.value ?? 'Unknown Error'));
      return null;
    }
    return response.json();
  } catch (networkError) {
    showError(networkError, errorMessage)
    return null;
  }
};

export const updateDisc = async (id: string, disc: Disc): Promise<void> => {
  const response = await fetch(`${BASE_URL}/discs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(disc)
  })
  if (!response.ok) {
    throw new Error(`Failed to update disc: ${response.status}`)
  }
}

export const deleteDisc = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/discs/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  if (!response.ok) {
    throw new Error(`Failed to delete disc: ${response.status}`)
  }
}
