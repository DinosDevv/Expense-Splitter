import { Group } from "@expense-splitter/shared/types"
import { eurFormatter } from "@expense-splitter/shared/helpers"
import { useState, useEffect } from "react"
import { CreateGroup } from "../components/CreateGroup"
import { memberColor } from "../memberColors"

import './Groups.css'

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => {
        setGroups(json)
      })
  }, [])

  return (
    <div className="groups_page">
      <section className="groups_section">
        <div className="groups_header">
          <h1>Your Groups</h1>
          <p>{groups.length} {groups.length === 1 ? "group" : "groups"}</p>
        </div>

        {groups.length === 0 && (
          <p className="groups_empty">No groups yet. Create one to get started.</p>
        )}

        <div className="group_list">
          {groups.map(g => {
            const total = g.expenses.reduce((sum, e) => sum + e.amount, 0)
            return (
              <a key={g.name} className="group_card" href={`groups/${g.name}`}>
                <div className="group_card_top">
                  <h2>{g.name}</h2>
                  <span className="group_card_chevron">›</span>
                </div>
                <p className="group_card_meta">
                  {g.participators.length} members · {g.expenses.length} expenses
                </p>
                <div className="group_card_bottom">
                  <div>
                    <p className="group_card_total">{eurFormatter.format(total / 100)}</p>
                    <p className="group_card_meta">Total expenses</p>
                  </div>
                  <div className="group_card_avatars">
                    {g.participators.slice(0, 4).map((p, i) => (
                      <span
                        key={p.name}
                        className="group_card_avatar"
                        style={{ backgroundColor: memberColor(i) }}
                        title={p.name}
                      >
                        {p.name[0]}
                      </span>
                    ))}
                    {g.participators.length > 4 && (
                      <span className="group_card_avatar group_card_more">
                        +{g.participators.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <aside className="groups_create">
        <CreateGroup />
      </aside>
    </div>
  )
}
