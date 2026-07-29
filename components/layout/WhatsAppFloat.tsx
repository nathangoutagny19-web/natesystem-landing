'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import { whatsappLink } from '@/lib/whatsapp'

const SIZE = 56
const MARGIN = 24

/**
 * Floating WhatsApp button, bottom-right, DRAGGABLE.
 *
 * Opens a WhatsApp chat with Nathan pre-filled in the visitor's language.
 * The visitor can drag it anywhere (position persisted in localStorage);
 * a real drag never triggers the chat (click vs drag is disambiguated by
 * a small movement threshold). Hidden via `data-hide-whatsapp-float`.
 */
export default function WhatsAppFloat() {
  const { lang } = useLang()
  const href = whatsappLink(lang)
  const label = lang === 'en' ? 'Chat with Nathan on WhatsApp' : 'Discuter avec Nathan sur WhatsApp'

  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const drag = useRef({ active: false, moved: 0, offX: 0, offY: 0 })

  // Default = bottom-right, unless a saved position exists.
  useEffect(() => {
    const def = { x: window.innerWidth - SIZE - MARGIN, y: window.innerHeight - SIZE - MARGIN }
    try {
      const s = localStorage.getItem('wa-float-pos')
      if (s) {
        const p = JSON.parse(s)
        setPos({
          x: Math.max(8, Math.min(window.innerWidth - SIZE - 8, p.x)),
          y: Math.max(8, Math.min(window.innerHeight - SIZE - 8, p.y)),
        })
        return
      }
    } catch {}
    setPos(def)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (!pos) return
    drag.current = { active: true, moved: 0, offX: e.clientX - pos.x, offY: e.clientY - pos.y }
    ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
  }, [pos])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!drag.current.active) return
    drag.current.moved += Math.abs(e.movementX) + Math.abs(e.movementY)
    const nx = Math.max(8, Math.min(window.innerWidth - SIZE - 8, e.clientX - drag.current.offX))
    const ny = Math.max(8, Math.min(window.innerHeight - SIZE - 8, e.clientY - drag.current.offY))
    setPos({ x: nx, y: ny })
  }, [])

  const onPointerUp = useCallback(() => {
    if (drag.current.active && drag.current.moved > 5 && pos) {
      try { localStorage.setItem('wa-float-pos', JSON.stringify(pos)) } catch {}
    }
    drag.current.active = false
  }, [pos])

  const onClick = useCallback(() => {
    // A real drag (moved past threshold) must not open the chat.
    if (drag.current.moved > 5) { drag.current.moved = 0; return }
    window.open(href, '_blank', 'noopener,noreferrer')
  }, [href])

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      className="wa-float"
      style={pos ? { left: pos.x, top: pos.y } : { right: MARGIN, bottom: MARGIN }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(href, '_blank', 'noopener,noreferrer') } }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16.001 2.667c-7.36 0-13.334 5.973-13.334 13.333 0 2.347.613 4.64 1.787 6.667L2.667 29.333l6.853-1.787a13.235 13.235 0 0 0 6.481 1.654h.005c7.36 0 13.331-5.973 13.331-13.333 0-3.563-1.387-6.907-3.904-9.427-2.52-2.52-5.867-3.907-9.432-3.907zm0 24.443h-.005a11.07 11.07 0 0 1-5.643-1.547l-.405-.24-4.205 1.099 1.123-4.099-.264-.421a11.063 11.063 0 0 1-1.696-5.901c0-6.117 4.979-11.093 11.099-11.093 2.965 0 5.749 1.155 7.843 3.253a11.012 11.012 0 0 1 3.251 7.845c-.003 6.117-4.981 11.104-11.099 11.104zm6.085-8.309c-.333-.165-1.973-.973-2.277-1.085-.307-.112-.531-.165-.752.165-.224.333-.864 1.085-1.059 1.309-.197.224-.392.251-.725.085-.336-.168-1.407-.521-2.685-1.659-.992-.885-1.661-1.973-1.856-2.309-.197-.333-.021-.512.144-.677.149-.149.336-.392.501-.587.165-.197.221-.336.336-.557.112-.224.056-.419-.027-.587-.085-.168-.749-1.811-1.027-2.477-.272-.651-.547-.563-.752-.573-.195-.011-.419-.013-.643-.013-.224 0-.587.083-.893.419-.307.336-1.176 1.149-1.176 2.795 0 1.648 1.205 3.245 1.371 3.469.168.224 2.371 3.619 5.747 5.077.803.347 1.429.557 1.917.715.805.256 1.539.219 2.117.133.645-.096 1.973-.808 2.251-1.587.277-.781.277-1.448.197-1.587-.083-.139-.301-.224-.635-.392z"
          fill="#fff"
        />
      </svg>

      <style jsx>{`
        :global(.wa-float) {
          position: fixed;
          width: ${SIZE}px;
          height: ${SIZE}px;
          border-radius: 50%;
          background: #25d366;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35), 0 2px 6px rgba(0, 0, 0, 0.2);
          z-index: 95;
          cursor: grab;
          touch-action: none;
          user-select: none;
          transition: transform 0.2s ease, box-shadow 0.25s ease;
        }
        :global(.wa-float:hover) {
          transform: scale(1.1);
          box-shadow: 0 12px 32px rgba(37, 211, 102, 0.5), 0 4px 12px rgba(0, 0, 0, 0.25);
        }
        :global(.wa-float:active) { cursor: grabbing; transform: scale(1.04); }
        :global(body[data-hide-whatsapp-float='true'] .wa-float) { display: none; }
        @media (max-width: 480px) {
          :global(.wa-float) { width: 52px; height: 52px; }
        }
        @media print { :global(.wa-float) { display: none !important; } }
      `}</style>
    </div>
  )
}
